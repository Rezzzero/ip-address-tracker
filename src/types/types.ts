export interface LocationTypes {
  city: string;
  country: string;
  postalCode: string;
  lat: number;
  lng: number;
  timezone: string;
}

export interface IpDataType {
  ip: string;
  isp: string;
  location: LocationTypes;
}
