import CountdownComponentParent from './Countdown/Countdown.js'
import FetchingComponent from "./Fetching/Fetching.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{marginBottom: "20px"}} >Problem 1</div>
      <CountdownComponentParent />
      <div style={{marginTop: "20px"}}>Problem 2</div>
      <FetchingComponent />
    </div>
  );
}

export default App;
