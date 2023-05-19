import { useState } from "react";
import "./Datepicker.css";
type DatepickerProps = {
    setSelectedDateOuter:Function;
  };
  
const Datepicker: React.FC<DatepickerProps> = ({ setSelectedDateOuter }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newDate = new Date(event.target.value);
      setSelectedDate(newDate);
      setSelectedDateOuter(newDate);
    };
    return (<div className="datepicker-container">
        <label htmlFor="datepicker">Select a date:</label>
        <input
          type="date"
          id="datepicker"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={handleDateChange}
          className="datepicker-input"
        />
        </div>
    )


}
 export default Datepicker;