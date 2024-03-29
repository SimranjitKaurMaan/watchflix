import { ToastContainer } from "react-toastify";
import "./App.css";
import { HeaderNavBar } from "./components/customComponents/Header/HeaderNavBar";
import { Router } from "./components/routes";

function App() {
  return (
    <div className="App">
      <HeaderNavBar/>
      <ToastContainer/>
      <Router/>
    </div>
  );
}

export default App;
