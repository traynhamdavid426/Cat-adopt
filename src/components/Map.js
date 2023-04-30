import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import React,{  useState } from "react";



const Map = (props) => {
  const { isLoaded } = props;
  const [selectedMarker, setSelectedMarker] = useState("");

  const containerStyle = {
    width: "90vw",
    height: "90vh",
  };
  const center = {
    lat: 30.3165,
    lng: 78.0322,
  };


  const markers = [
    {
      name: "Los Angeles, California",
      status: "parked",
      location: {
        lat: 30.4598,
        lng: 78.0644,
      },
    },
    {
      name: "New York, New York",
      status: "inair",
      location: {
        lat: 30.1951,
        lng: 78.1921,
      },
    },
    {
      name: "Denver, Colorado",
      status: "incident",
      location: {
        lat: 30.2553,
        lng: 78.0972,
      },
    },
    {
      name: "Chicago, Illinois",
      status: "offline",
      location: {
        lat: 30.3165,
        lng: 78.0322,
      },
    },
    {
      name: "location-5",
      status: "mission",
      location: {
        lat: 30.267,
        lng: 78.0909,
      },
    },
  ];

 

  return (
    isLoaded && (
      <>
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
                <h1>location -{selectedMarker.name}</h1>
                <h1>status - {selectedMarker.status}</h1>
                <button onClick={() => setSelectedMarker("")}>close</button>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </>
    )
  );
};

export default Map;