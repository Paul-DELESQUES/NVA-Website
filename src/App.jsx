import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="App"></div>
      </BrowserRouter>
    </>
  );
}

export default App;
