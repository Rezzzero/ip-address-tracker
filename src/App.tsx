import { useEffect, useState } from "react";
import { MainInfo } from "./components/main/MainInfo";
import { MapComponent } from "./components/map/MapComponent";
import { useGetIp } from "./hooks/useGetIp";
import axios from "axios";
import { API_KEY } from "./constants";
import { IpDataType } from "./types/types";

function App() {
  const [data, setData] = useState<IpDataType>({} as IpDataType);
  const [ipOrDomain, setIpOrDomain] = useState("");

  useGetIp(setData);

  useEffect(() => {
    if (data.ip) setIpOrDomain(data.ip);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpOrDomain(e.target.value);
  };

  const getDataByIpOrDomain = (e: React.FormEvent) => {
    e.preventDefault();
    if (ipOrDomain) {
      axios
        .get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipOrDomain}`
        )
        .then((res) => setData(res.data))
        .catch((err) => console.error("IP fetch error:", err));
    }
  };

  return (
    <>
      {data.ip && (
        <>
          <MainInfo
            data={data}
            ipOrDomain={ipOrDomain}
            handleChange={handleChange}
            onSubmit={getDataByIpOrDomain}
          />
          <MapComponent location={data.location} />
        </>
      )}
    </>
  );
}

export default App;
