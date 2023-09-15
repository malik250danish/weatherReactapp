import "./App.css";
import Weatherapp from "./components/Weatherapp";

function App() {
  return (
    <div className="App  flex flex-col justify-center items-center h-screen bgMain ">
      <p className="text-cemter text-xl py-3">Weather Application</p>
      <Weatherapp></Weatherapp>
    </div>
  );
}

export default App;
