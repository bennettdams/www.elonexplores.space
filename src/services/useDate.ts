export interface LaunchDate {
  date: Date;
  day: { no: number; name: string };
  weekday: { no: number; name: string };
  month: { no: number; name: string };
  year: { no: number; name: string };
}

const useDate = () => {
  const createLaunchDateObject = (date: Date): LaunchDate => {
    return {
      date,
      day: { no: date.getDay(), name: getDayOrdinal(date.getDay()) },
      weekday: { no: date.getDay(), name: getWeekdayName(date) },
      month: { no: date.getMonth(), name: getMonthName(date) },
      year: { no: date.getFullYear(), name: "year" }
    };
  };

  const getDayOrdinal = (dayNo: number) => {
    if (dayNo > 3 && dayNo < 21) return dayNo + "th";
    switch (dayNo % 10) {
      case 1:
        return dayNo + "st";
      case 2:
        return dayNo + "nd";
      case 3:
        return dayNo + "rd";
      default:
        return dayNo + "th";
    }
  };

  const getWeekdayName = (date: Date) => {
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[date.getDay()];
  };

  const getMonthName = (date: Date) => {
    const month = new Array(7);
    month[1] = "Januray";
    month[2] = "February";
    month[3] = "March";
    month[4] = "April";
    month[5] = "May";
    month[6] = "June";
    month[7] = "July";
    month[8] = "August";
    month[9] = "September";
    month[10] = "October";
    month[11] = "November";
    month[12] = "December";
    return month[date.getDay()];
  };

  return {
    createLaunchDateObject,
    getDayOrdinal,
    getWeekdayName,
    getMonthName
  };
};

export default useDate;
