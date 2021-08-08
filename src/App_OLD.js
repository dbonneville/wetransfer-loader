// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>ee</h1>
      <div id="loading">
        <div className="inner-shadow"></div>
        <div className="timer">
          <div className="dot">
            <span></span>
          </div>
          <div className="staticDot">
            <span></span>
          </div>
          <div className="hold" id="left">
            <div className="pie"></div>
          </div>
          <div className="hold" id="right">
            <div className="pie"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
