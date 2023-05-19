import './Calendar.css';

type CalendarProps = {
  date: Date;
};

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  const getMonthYearString = (date: Date): string => {
    const timeFormat: Intl.DateTimeFormatOptions = {
      month: "long",
      year: "numeric",
    };
    // const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString(undefined, timeFormat);
  };

  const getWeekdays = (): string[] => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekdays.map((day) => day.slice(0, 2)); // Abbreviate weekdays to 2 characters
  };

  const getDaysInMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based
    return new Date(year, month, 0).getDate();
  };

  const getCalendarMatrix = (date: Date): number[][] => {
    const daysInMonth = getDaysInMonth(date);
    console.log("daysinmonth", daysInMonth);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    console.log("firstday", firstDay);
    const rows = Math.ceil((firstDay + daysInMonth) / 7);
    const matrix: number[][] = [];

    let dayCount = 1;

    for (let i = 0; i < rows; i++) {
      const row: number[] = [];

      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || dayCount > daysInMonth) {
          row.push(0); // Empty cell
        } else {
          row.push(dayCount);
          dayCount++;
        }
      }

      matrix.push(row);
    }

    return matrix;
  };

  const renderCalendar = (): JSX.Element => {
    const weekdays = getWeekdays();
    const calendarMatrix = getCalendarMatrix(date);
    const monthYearString = getMonthYearString(date);

    return (
      <div className="calendar">
        <div className="monthYear">{monthYearString}</div>
        <div className="row">
          {weekdays.map((weekday, index) => (
            <div className="cell" key={index}>
              {weekday}
            </div>
          ))}
        </div>
        {calendarMatrix.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((day, dayIndex) => (
              <div
                data-testid={day !== 0 ? "date-cell" : "empty"}
                className={`cell ${day === date.getDate() ? "highlight" : ""}`}
                key={dayIndex}
              >
                {day !== 0 ? day : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return renderCalendar();
};

export default Calendar;
