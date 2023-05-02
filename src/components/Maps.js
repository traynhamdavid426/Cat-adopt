import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";
import React,{ useState } from "react";



const  Maps =() => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const Map = (props) => {
    const { isLoaded } = props;
    const [selectedMarker, setSelectedMarker] = useState("");
  
    const containerStyle = {
      width: "90vw",
      height: "90vh",
      
    };
    const center = {
      lat: 38.895,
      lng: -77.03667,
    };
  
    const markers = [
      {
        name: "Los Angeles, California",
        status: "parked",
        location: {
          lat: 38.915161,
          lng: -77.430992,
        },
      },
      {
        name: "New York, New York",
        status: "inair",
        location: {
          lat: 38.897675,
          lng: -77.036530,
        },
      },
      {
        name: "Denver, Colorado",
        status: "incident",
        location: {
          lat: 31.765900,
          lng: -106.461098,
        },
      },
      {
        name: "Chicago, Illinois",
        status: "offline",
        location: {
          lat: 38.937496,
          lng: -77.088806,
        },
      },
      {
        name: "location-5",
        status: "mission",
        location: {
          lat: 38.939360,
          lng: -77.091750,
        },
      },
    ];
  
  
    
    
  
    
  
    
    return (
      isLoaded && (
        <div>
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
        </div>
      )
    );
  };

  return (
    <div className="App">
      
      <Map isLoaded={isLoaded}/>
    </div>
  );
}

export default Maps;