import React, { useEffect, useState } from "react";
import Page from "../components/layout/Page";

interface LaunchDate {
  date: Date;
  day: { no: number; name: string };
  month: { no: number; name: string };
  year: { no: number; name: string };
}

const Home = () => {
  const [lastLaunchDate, setLastLaunchDate] = useState<LaunchDate | null>(null);

  useEffect(() => {
    const fetchLastLaunch = async () => {
      const response = await fetch(
        "https://api.spacexdata.com/v3/launches/latest"
      );
      const json = await response.json();
      const date: Date = new Date(json.launch_date_utc);
      setLastLaunchDate({
        date,
        day: { no: date.getDay(), name: "day" },
        month: { no: date.getMonth(), name: "mon" },
        year: { no: date.getFullYear(), name: "year" }
      });
    };
    fetchLastLaunch();
  }, []);

  return (
    <Page name="page-home">
      <div className="w-full">
        <h1 className="mb-6 text-center text-2xl">Elon in space</h1>
        {lastLaunchDate && (
          <div className="text-center">
            <div>
              <h4 className="text-6xl">
                {lastLaunchDate.date.toLocaleString()}
              </h4>
              <h4 className="text-1xl">{lastLaunchDate.date.toTimeString()}</h4>
            </div>
            <div className="flex flex-wrap overflow-hidden">
              <div className="w-1/3 overflow-hidden">a</div>

              <div className="w-1/3 overflow-hidden">a</div>

              <div className="w-1/3 overflow-hidden">a</div>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
};

export default Home;
