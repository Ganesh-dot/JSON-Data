import logo from './logo.svg';
import './App.css';
import PushList from "./data/PushList";
import FetchAPI from "./data/FetchAPI";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FetchAPI />
      <PushList />
    </div>
  );
}

export default App;
