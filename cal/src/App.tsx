import { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import Datepicker from './components/Datepicker/Datepicker';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className='app-container'>
      <div>
        <Datepicker setSelectedDateOuter={setSelectedDate}/>
        <Calendar date={selectedDate} />
      </div>
    </div>
  );
}

export default App;
