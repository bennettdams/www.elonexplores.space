import { useState } from "react";

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const useDate = () => {
  const [date, setDate] = useState<Date>(new Date());

  const getWeekday = () => {
    return weekday[date.getDay()];
  };

  return { date, setDate, getWeekday };
};

export default useDate;
