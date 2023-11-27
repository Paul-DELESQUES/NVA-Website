import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
