import { act, renderHook } from '@testing-library/react-hooks';

import { clearGeocoder, fetchGeocoder } from 'state/concepts/googleMaps/actions';
import { dispatch } from '__mocks__/react-redux';
import mockedListing from 'views/__mocks__/mockedListing';

import useListingLocationMap from '../useListingLocationMap';

jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));
jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
}));

const mockedListingId = 'listingId';
const mockedRouter = {
  query: { listingId: mockedListingId },
};
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => mockedRouter),
}));

const MockedMap = {
  addListener: jest.fn(),
  getCenter: () => ({ lng: jest.fn(() => 1), lat: jest.fn(() => 2) }),
  setCenter: jest.fn(),
};
const MockedMarker = {
  setPosition: jest.fn(),
};

describe('useListingLocationMap hook', () => {
  let result = null;
  let mapCenter = null;
  const props = { shouldRedirect: true, message: { description: { id: 'message.id' } } };

  Object.defineProperty(window, 'google', {
    value: { maps: { Map: jest.fn(() => MockedMap), Marker: jest.fn(() => MockedMarker) } },
  });

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(() => useListingLocationMap(props)));

    result.current.mapRef.current = MockedMap;
    result.current.markerRef.current = MockedMarker;
    result.current.mapContainerRef.current = 'mapContainerRef';

    const { longitude, latitude } = result.current.formik.initialValues;
    mapCenter = { lat: latitude, lng: longitude };
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('updateMapCenter method', () => {
    it('should calls mapRef.current.setCenter and markerRef.current.setPosition when mapRef.current and markerRef.current are presents', () => {
      expect(result.current.updateMapCenter()).toBe(true);
      expect(MockedMap.setCenter).toHaveBeenCalledWith(mapCenter);
      expect(MockedMarker.setPosition).toHaveBeenCalledWith(mapCenter);
    });

    it('returns false when mapRef.current isn`t present', () => {
      result.current.mapRef.current = null;

      expect(result.current.updateMapCenter()).toBe(false);
    });

    it('returns false when mapRef.current is present and markerRef.current isn`t present', () => {
      result.current.mapRef.current = MockedMap;
      result.current.markerRef.current = null;

      expect(result.current.updateMapCenter()).toBe(false);
    });
  });

  it('onMapDragHandler method should calls markerRef.current.setPosition', () => {
    result.current.onMapDragHandler();

    expect(MockedMarker.setPosition).toHaveBeenCalledWith({
      lat: expect.any(Function),
      lng: expect.any(Function),
    });
  });

  it('onMapDragEndHandler method should dispatches fetchGeocoder and calls setCoords', () => {
    let res = null;

    act(() => {
      result.current.onMapDragEndHandler();
    });

    act(() => {
      res = result.current.coords;
    });

    const { lng, lat } = MockedMap.getCenter();

    expect(dispatch).toHaveBeenCalledWith(
      fetchGeocoder({ query: `${lat()},${lng()}`, reverse: true }),
    );
    expect(res).toEqual({ lng: lng(), lat: lat() });
  });

  describe('createMap method', () => {
    it('should returns false when mapContainerRef and mapRef are present', () => {
      expect(result.current.createMap()).toBe(false);
    });

    it('should returns false when mapContainerRef isn`t present', () => {
      result.current.mapContainerRef.current = null;

      expect(result.current.createMap()).toBe(false);
    });

    it('should creates map when mapContainerRef is present and mapRef isn`t present', () => {
      result.current.mapRef.current = null;

      expect(result.current.createMap()).toBe(true);

      expect(window.google.maps.Map).toHaveBeenCalledWith(result.current.mapContainerRef.current, {
        zoom: 18,
        center: mapCenter,
        draggable: true,
      });
      expect(window.google.maps.Marker).toHaveBeenCalledWith({
        position: mapCenter,
        map: MockedMap,
        draggable: false,
      });

      expect(MockedMap.addListener).toHaveBeenCalledWith('drag', result.current.onMapDragHandler);
      expect(MockedMap.addListener).toHaveBeenCalledWith(
        'dragend',
        result.current.onMapDragEndHandler,
      );
    });
  });

  it('onMountHandler method should returns callback that dispatches clearGeocoder', () => {
    result.current.onMountHandler()();

    expect(dispatch).toHaveBeenCalledWith(clearGeocoder());
  });
});
