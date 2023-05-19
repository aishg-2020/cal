import './App.css';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <Calendar date={new Date("3 October 2022")} />
    </div>
  );
}

export default App;
