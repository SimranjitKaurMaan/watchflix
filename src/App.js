import "./App.css";
import { HeaderNavBar } from "./components/customComponents/Header/HeaderNavBar";
import { Router } from "./components/routes";

function App() {
  return (
    <div className="App">
      <HeaderNavBar/>
      <Router/>
    </div>
  );
}

export default App;
