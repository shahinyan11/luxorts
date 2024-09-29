import { act, renderHook } from '@testing-library/react-hooks';

import { LISTING_STATUS, LISTING_STEP_STATUS } from 'constants/listing';

import { showModal } from 'state/modal/actions';
import { dispatch } from '__mocks__/react-redux';

import useContainer from '../hook';

describe('Settings useContainer hook', () => {
  let result = null;
  const props = {
    id: 'listingId',
    status: LISTING_STATUS.IN_DRAFT,
    stepStatus: LISTING_STEP_STATUS.ACCOMODATION,
  };

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(() => useContainer(props)));

    act(() => {
      result.current.setVisible(true);
    });
  });

  describe('matches snapshot', () => {
    Object.values(LISTING_STATUS).forEach((status) => {
      it(`when status equals ${status}`, () => {
        ({ result } = renderHook(() => useContainer({ ...props, status })));

        expect(result.current).toMatchSnapshot();
      });
    });
  });

  it(`matches snapshot when stepStatus equals ${LISTING_STEP_STATUS.FINISHED}`, () => {
    ({ result } = renderHook(() =>
      useContainer({ ...props, stepStatus: LISTING_STEP_STATUS.FINISHED }),
    ));

    expect(result.current).toMatchSnapshot();
  });

  it('onUnpublish method should dispatches modal with specific props and sets visible local state to false', () => {
    expect(result.current.visible).toBe(true);

    act(() => {
      result.current.onUnpublish();
    });

    expect(dispatch).toHaveBeenCalledWith(
      showModal({
        modalType: 'UPDATE_LISTING_STATUS_MODAL',
        modalProps: {
          title: { id: 'listing.status.modal.unpublish.title' },
          subtitle: { id: 'listing.status.modal.unpublish.subtitle' },
          description: { id: 'listing.status.modal.unpublish.description' },
          confirmBtnText: { id: 'shared.unpublish' },
          id: props.id,
          status: LISTING_STATUS.UNPUBLISHED,
        },
      }),
    );

    expect(result.current.visible).toBe(false);
  });

  it('onPublish method should dispatches modal with specific props and sets visible local state to false', () => {
    expect(result.current.visible).toBe(true);

    act(() => {
      result.current.onPublish();
    });

    expect(dispatch).toHaveBeenCalledWith(
      showModal({
        modalType: 'UPDATE_LISTING_STATUS_MODAL',
        modalProps: {
          title: { id: 'listing.status.modal.publish.title' },
          subtitle: { id: 'listing.status.modal.publish.subtitle' },
          description: { id: 'listing.status.modal.publish.description' },
          confirmBtnText: { id: 'shared.publish' },
          id: props.id,
          status: LISTING_STATUS.PUBLISHED,
        },
      }),
    );

    expect(result.current.visible).toBe(false);
  });

  it('onRepublish method should dispatches modal with specific props and sets visible local state to false', () => {
    expect(result.current.visible).toBe(true);

    act(() => {
      result.current.onRepublish();
    });

    expect(dispatch).toHaveBeenCalledWith(
      showModal({
        modalType: 'UPDATE_LISTING_STATUS_MODAL',
        modalProps: {
          title: { id: 'listing.status.modal.republish.title' },
          subtitle: { id: 'listing.status.modal.republish.subtitle' },
          description: { id: 'listing.status.modal.republish.description' },
          confirmBtnText: { id: 'shared.republish' },
          id: props.id,
          status: LISTING_STATUS.ON_MODERATION,
        },
      }),
    );

    expect(result.current.visible).toBe(false);
  });

  it('onRemove method should dispatches modal with specific props and sets visible local state to false', () => {
    expect(result.current.visible).toBe(true);

    act(() => {
      result.current.onRemove();
    });

    expect(dispatch).toHaveBeenCalledWith(
      showModal({
        modalType: 'UPDATE_LISTING_STATUS_MODAL',
        modalProps: {
          title: { id: 'listing.status.modal.remove.title' },
          subtitle: { id: 'listing.status.modal.remove.subtitle' },
          description: { id: 'listing.status.modal.remove.description' },
          confirmBtnText: { id: 'shared.remove' },
          confirmBtnProps: { variant: 'warning' },
          id: props.id,
          status: LISTING_STATUS.DELETED,
        },
      }),
    );

    expect(result.current.visible).toBe(false);
  });
});
