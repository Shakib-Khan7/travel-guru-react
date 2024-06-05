import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Map = () => {
    const defaultProps = {
    center: {
      lat: 23.87653576067744,
      lng: 90.39185884281831

       
    },
    zoom: 11
  };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          
          lng={38.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    );
};

export default Map;