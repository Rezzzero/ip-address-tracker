import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const RecenterMap = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lng], map.getZoom());
  }, [lat, lng, map]);

  return null;
};
