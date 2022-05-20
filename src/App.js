import CountdownComponentParent from './Countdown/Countdown.js'
import FetchingComponent from "./Fetching/Fetching.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__problem-label" >Problem 1</div>
      <CountdownComponentParent />
      <div className="App__problem-label">Problem 2</div>
      <FetchingComponent />
    </div>
  );
}

export default App;
