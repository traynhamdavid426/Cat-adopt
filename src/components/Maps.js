import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";
import "../SubComponents/Gender/Gender.css";

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const Map = (props) => {
    const { isLoaded } = props;
    const [selectedMarker, setSelectedMarker] = useState("");

    const containerStyle = {
      width: "70vw",
      height: "70vh",
      margin: "0 auto",
    };

    const center = {
      lat: 38.895,
      lng: -77.03667,
    };

    const markers = [
      {
        name: "Washington Animal Rescue League",
        status: "Adoptable pets",
        location: {
          lat: 38.917747,
          lng: -77.028884,
        },
        website: "https://www.kingstreetcats.org/" ,
        phoneNumber: "(202) 726-2556",
      },
      {
        name: "Humane Rescue Alliance",
        status: "Adoptable pets",
        location: {
          lat: 38.907772,
          lng: -76.973270,
        },
        website: "https://www.humanerescuealliance.org/" ,
        phoneNumber: "(202) 727-1000",
      },
      {
        name: "City Dogs Rescue & City Kitties",
        status: "Adoptable pets",
        location: {
          lat: 38.914200,
          lng: -77.029900,
        },
        website: "https://www.citydogsrescuedc.org/" ,
        phoneNumber: "(202) 567-7364",
      },
      
    ];
    
    return (
      isLoaded && (
        <div className="map">
          <div style={{ position: "relative" }}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {markers.map((marker) => {
                return (
                  <div key={marker.name}>
                    <Marker
                      position={marker.location}
                      onClick={() => {
                        setSelectedMarker(marker);
                      }}
                    />
                  </div>
                );
              })}
              {selectedMarker && (
                <InfoWindow
                  position={selectedMarker.location}
                  options={{
                    pixelOffset: new window.google.maps.Size(0, -40),
                  }}
                >
                  <div>
                    <h1>{selectedMarker.name}</h1>
  
                    <h2><a href={selectedMarker.website} rel="noreferrer" target="_blank">
                    <div className="navy">{selectedMarker.website}</div>
      </a></h2>
                    <h2>{selectedMarker.phoneNumber}</h2>
                    <button
                      style={{
                        backgroundColor: "green",
                         
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                      onClick={() => setSelectedMarker("")}
                    >
                      close
                    </button>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </div>
        </div>
      )
    );
  };

  return (
    <div className="mt6">
      <Map isLoaded={isLoaded} /></div>
    
  );
};

export default Maps;
