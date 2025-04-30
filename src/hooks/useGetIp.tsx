import { useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../constants";
import { IpDataType } from "../types/types";

export const useGetIp = (
  setData: React.Dispatch<React.SetStateAction<IpDataType>>
) => {
  useEffect(() => {
    axios
      .get(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("IP fetch error:", err));
  }, [setData]);
};
