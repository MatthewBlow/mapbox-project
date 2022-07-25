import { accessToken } from 'mapbox-gl';
import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl}from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import RoomIcon from '@mui/icons-material/Room';
import "../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {format} from 'timeago.js'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { positions } from '@mui/system';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import Map from './components/map';
import Canvas from './components/canvas';
// import Marker from './components/markers';

function App() {
  const [currentPosition, setCurrentPosition] = useState(null)
  const [markers, setMarkers] = useState([])
  const [viewport, setViewport] = useState({});
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [showCanvas, setShowCanvas] = useState(false)
  
  useEffect(() => {
    const getMarkers = async () => {
      try {
        const res = await axios.get("/markers")
        setMarkers(res.data)
        console.log("The data")
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getMarkers();
  }, [])

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id)
    setShowCanvas(true)
  }

  navigator.geolocation.getCurrentPosition(successLocation, 
  errorLocation, { 
    enableHighAccuracy: true
  });

  function successLocation(position){
    setCurrentPosition(position)
    setViewport({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      zoom: 2
    }) 
    console.log("Current Position")
    console.log(currentPosition)
  }

  function errorLocation(){
    
  }

  const handlePanelClose = () => setShowCanvas(false);
  
  return (
  <div className='App'>
    <Map>
        {markers.map(marker => (
      <>
      <Marker 
        latitude={marker.lat} 
        longitude={marker.long} 
        key={marker._id} 
        style={{fontSize: viewport.zoom * 5, cursor: "pointer"}} 
        onClick={() => handleMarkerClick(marker._id)}
      />

    {marker._id === currentPlaceId &&
      <Canvas 
        show={showCanvas} 
        onHide={handlePanelClose} 
        title={marker.title} 
        desc={marker.desc} />}
      </>
    ))}
    </Map>
  </div> 
  );
}

export default App;
