import ReactMapGL, {Marker, Popup, NavigationControl}from 'react-map-gl';
import { useState } from 'react';

const Map = (props) => {    
const [viewport, setViewport] =  useState({}); 
  return(
      <ReactMapGL
      initialViewState={{...viewport}}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      style={{width: 1920, height: 1080}}
      mapStyle="mapbox://styles/matthewblow/cl5wsktfd001214s6ld7wkzq4"
      onMove={(viewport) => setViewport(viewport.viewState)}
      projection="globe">
        {props.children}
      ))
    </ReactMapGL>
  )
}

export default Map