import { Wrapper } from '@googlemaps/react-wrapper';

import { GOOGLE_MAPS_API_KEY } from 'constants/googleMaps';

const withGoogleMaps = (Component) => {
  const WithGoogleMaps = (props) => (
    <Wrapper apiKey={GOOGLE_MAPS_API_KEY}>
      <Component {...props} />
    </Wrapper>
  );

  WithGoogleMaps.Layout = Component.Layout;

  WithGoogleMaps.getInitialProps = Component.getInitialProps;

  return WithGoogleMaps;
};

export default withGoogleMaps;
