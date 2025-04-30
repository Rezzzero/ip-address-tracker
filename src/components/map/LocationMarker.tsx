import locationIcon from "../../assets/images/icon-location.svg";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { LocationTypes } from "../../types/types";

const customIcon = L.icon({
  iconUrl: locationIcon,
  iconSize: [40, 38],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export const LocationMarker = ({ location }: { location: LocationTypes }) => {
  const position = {
    lat: location.lat,
    lng: location.lng,
  };

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
};
