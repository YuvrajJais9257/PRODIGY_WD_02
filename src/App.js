import logo from './logo.svg';
import './App.css';
import Stopwatch from './Components/Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1> Chrono Tracker</h1>
        <Stopwatch />
      </header>
    </div>
  );
}

export default App;
