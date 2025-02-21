import { isToday, isTomorrow, differenceInDays, format } from "date-fns";

export function dateFormater(date: string | number | Date) {
  const today = new Date();

  if (isToday(date)) {
    return "Today";
  }

  if (isTomorrow(date)) {
    return "Tommorow";
  }

  const diff = differenceInDays(today, date);

  if (diff > 0) {
    return `${diff} days ago`;
  } else {
    return format(date, "yyyy-MM-dd");
  }
}
