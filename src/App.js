import { useJsApiLoader } from "@react-google-maps/api"
import Map from "./Components/Map";
const App =() => {
  const { isLoaded } = useJsApiLoader({
    
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <h1>Loading!!!...</h1>;
  return (
    <div className="App">
  
      <Map isLoaded={isLoaded} />
    </div>
  );
}

export default App;  
