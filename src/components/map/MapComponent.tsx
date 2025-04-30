import { MapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "./LocationMarker";
import { LocationTypes } from "../../types/types";
import { RecenterMap } from "./RecenterMap";

export const MapComponent = ({ location }: { location: LocationTypes }) => {
  return (
    <MapContainer
      center={{ lat: location.lat, lng: location.lng }}
      zoom={14}
      scrollWheelZoom={true}
      zoomControl={false}
      className="w-full h-[410px] lg:h-[655px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RecenterMap lat={location.lat} lng={location.lng} />
      <LocationMarker location={location} />
    </MapContainer>
  );
};
