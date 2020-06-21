import React from 'react'
import {
 GoogleMap,
 useLoadScript,
 Marker,
 InfoWindow,
} from '@react-google-maps/api';
import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css"
import mapStyles from './mapStyles'
import logo from "../images/logowhite.png"
const libraries = ["places"]
const mapContainerStyle = {
 width: "100vw",
 height: "100vh",
};
const center = {
 lat: 7.62329,
 lng: 5.22087,
};
const options = {
 styles: mapStyles,
 disableDefaultUI: true,
 zoomControl: true,
};


export default function Direction() {
 const { isLoaded, loadError } = useLoadScript({
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  libraries,
 })
 if (loadError) return "Error loading maps";
 if (!isLoaded) return "Loading Maps";
 return (
  <div>
   <h8>
    <span>
     <img src={logo} alt="3ive" />
    </span>
   </h8>
   <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options}></GoogleMap>
  </div>
 )
}
