import React, { useEffect, useState } from "react";
import Page from "../components/layout/Page";
import useDate, { LaunchDate } from "../../services/useDate";
import BackgroundImage from "../../assets/img/elon.png";

const Home = () => {
  const [lastLaunchDate, setLastLaunchDate] = useState<LaunchDate | null>(null);
  const [nextLaunchDate, setNextLaunchDate] = useState<LaunchDate | null>(null);
  const { createLaunchDateObject } = useDate();

  useEffect(() => {
    const fetchLastLaunch = async () => {
      const response = await fetch(
        "https://api.spacexdata.com/v3/launches/latest"
      );
      const json = await response.json();
      const date: Date = new Date(json.launch_date_utc);
      setLastLaunchDate(createLaunchDateObject(date));
    };
    const fetchNextLaunch = async () => {
      const response = await fetch(
        "https://api.spacexdata.com/v3/launches/next"
      );
      const json = await response.json();
      const date: Date = new Date(json.launch_date_utc);
      setNextLaunchDate(createLaunchDateObject(date));
    };
    fetchLastLaunch();
    fetchNextLaunch();
  }, []);

  return (
    <Page name="page-home" backgroundImage={BackgroundImage}>
      <div className="w-full">
        <h1 className="mb-6 text-center text-2xl">Elon in space</h1>
        {lastLaunchDate && nextLaunchDate && (
          <div className="text-center">
            <div>
              <p className="italic">{lastLaunchDate.date.toTimeString()}</p>
            </div>

            <div className="overflow-hidden text-6xl text-center">
              <span className="font-serif">
                {lastLaunchDate.weekday.name}, {lastLaunchDate.day.name}{" "}
                {lastLaunchDate.month.name}
              </span>
            </div>

            <div className="overflow-hidden text-6xl text-center">
              <span className="font-serif">
                {nextLaunchDate.weekday.name}, {nextLaunchDate.day.name}{" "}
                {nextLaunchDate.month.name}
              </span>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
};

export default Home;
