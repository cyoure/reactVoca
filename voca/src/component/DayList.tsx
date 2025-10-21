import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.ts";

export interface IDay {
  id: number;
  day: number;
}

export default function DayList() {
  const days: IDay[] = useFetch("http://localhost:3001/days");
  // 렌더링 직후 한번만 호출하고 싶을 땐 빈 배열을 사용하면 된다.

  if (days.length === 0) {
    return <span>Loading...</span>;
  }
  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}> Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
