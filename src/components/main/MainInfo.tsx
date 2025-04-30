import arrowIcon from "../../assets/images/icon-arrow.svg";
import { IpDataType } from "../../types/types";
import "./MainInfo.css";

export const MainInfo = ({
  data,
  ipOrDomain,
  handleChange,
  onSubmit,
}: {
  data: IpDataType;
  ipOrDomain: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}) => {
  return (
    <div className="main-info">
      <div className="w-full container mx-auto flex flex-col items-center justify-center gap-5 p-5 pb-34 relative lg:gap-10">
        <h1 className="text-2xl font-bold text-white lg:text-4xl">
          IP Adress Tracker
        </h1>
        <form
          onSubmit={(e) => onSubmit(e)}
          className="w-full flex lg:justify-center"
        >
          <input
            type="text"
            value={ipOrDomain}
            onChange={handleChange}
            placeholder="Search for any IP address or domain"
            className="bg-white w-full outline-none px-5 py-3 font-semibold rounded-l-xl cursor-pointer lg:py-4 lg:w-[600px]"
          />
          <button
            type="submit"
            className="bg-black p-[18px] rounded-r-xl cursor-pointer hover:bg-gray-700 lg:p-[24px]"
          >
            <img
              src={arrowIcon}
              alt="arrow icon"
              className="w-[9px] h-[12px]"
            />
          </button>
        </form>
        <div className="absolute top-40 bg-white w-[90%] flex flex-col items-center text-center justify-center gap-2 p-5 rounded-xl z-500 lg:top-52 lg:items-start lg:text-left lg:p-10 lg:flex-row lg:w-auto">
          <div className="flex flex-col gap-2 border-r-1 border-gray-200 pr-10">
            <h3 className="text-xs font-bold text-gray-400">IP ADDRESS</h3>
            <p className="text-xl font-bold text-black">{data.ip}</p>
          </div>
          <div className="flex flex-col gap-2 border-r-1 border-gray-200 pl-5 pr-10">
            <h3 className="text-xs font-bold text-gray-400">LOCATION</h3>
            <p className="text-xl font-bold text-black lg:max-w-[140px]">
              {data.location.city}, {data.location.country}{" "}
              {data.location.postalCode}
            </p>
          </div>
          <div className="flex flex-col gap-2 border-r-1 border-gray-200 pl-5 pr-10">
            <h3 className="text-xs font-bold text-gray-400">TIMEZONE</h3>
            <p className="text-xl font-bold text-black">
              UTC {data.location.timezone}
            </p>
          </div>
          {data.isp && (
            <div className="flex flex-col gap-2 pl-5">
              <h3 className="text-xs font-bold text-gray-400">ISP</h3>
              <p className="text-xl font-bold text-black">{data.isp}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
