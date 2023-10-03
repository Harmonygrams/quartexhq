//import functions
import { Routes, Route } from "react-router-dom";

//import pages
import { Home, Launchpad, Leaderboard } from "./pages";

//import components
import { ToastContainer } from "react-toastify";

//import styles
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        {/* <Route path={"/launchpad"} element={<Launchpad />} /> */}
        <Route path={"/leaderboard"} element={<Leaderboard />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
