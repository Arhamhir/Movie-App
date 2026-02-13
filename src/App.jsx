import Fav from "./pages/Fav";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import "./css/App.css";

const App = () => {
  return (
    <MovieProvider>
      <div>
        <NavBar></NavBar>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Fav" element={<Fav></Fav>}></Route>
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
};

export default App;
