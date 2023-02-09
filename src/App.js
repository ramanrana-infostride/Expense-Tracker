import "./App.css";

import Tracker from "./components/Tracker/Tracker";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="main-heading">
          <i>Track your Expenses</i>
        </h1>
        <Tracker />
      </div>
    </>
  );
}

export default App;
