import React from 'react';
import { StreetViewPanorama } from 'react-google-maps';

const streetViewPanoramaOptions = {
  position: { lat: 37.869260, lng: -122.254811 },
  pov: { heading: 165, pitch: 0 },
  zoom: 1,
};

const StreetView = () => (
  <StreetViewPanorama
    apiKey="YOUR_API_KEY"
    visible
    options={streetViewPanoramaOptions}
  />
);

export default StreetView;
