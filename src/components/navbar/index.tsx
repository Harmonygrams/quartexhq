//import hooks
import { useState } from "react";
import { useLocation } from "react-router-dom";

//import logo
import Logo from "../../assets/quartexLogo2.png";

//import functions
import { motion, AnimatePresence } from "framer-motion";

//importing components
import { toast } from "react-toastify";

//import icons
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";

const options = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0, // Animate to the center of the screen
  },
  exit: {
    x: "-100%", // Animate off the screen to the left
  },
};
const Navbar = () => {
  const [sidebarEnabled, setSidebarEnabled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const comingSoon = () => {
    toast.success("Coming soon");
  };
  return (
    <nav className="w-[95%] mx-auto max-w-[1300px]">
      <div className="flex justify-between items-center py-4 px-2">
        <a href="/" className="flex items-center gap-2 transition">
          <img src={Logo} alt="logo" className="w-8 inline-block" />
          <span className="font-worksans font-semibold text-xl">Quartex</span>
        </a>
        <ul className="justify-center gap-6 hidden sm:flex transition">
          <li className="inline-block">
            <a
              href="/"
              className={`hover:underline text-[17px] transition ${
                pathname === "/" && "font-semibold"
              }`}
            >
              Home
            </a>
          </li>
          <li className="inline-block">
            <a
              href="/leaderboard"
              className={`hover:underline text-[17px] transition ${
                pathname === "/leaderboard" && "font-semibold"
              }`}
            >
              Leaderboard
            </a>
          </li>
          <li className="inline-block">
            {/* <a
              href="/launchpad"
              className={`hover:underline text-[17px] transition ${
                pathname === "/launchpad" && "font-semibold"
              }`}
            >
              Launchpad
            </a> */}
          </li>
        </ul>
        {/* <a
          href="/launchpad"
          className="hidden sm:inline-block bg-gradient-to-r from-green-800 to-green-500 to-green-400 px-8 py-3 rounded-lg text-white text-sm transition font-medium"
        >
          Launchpad
        </a> */}
        <button
          onClick={comingSoon}
          className="hidden sm:inline-block bg-gradient-to-r from-green-800 to-green-500 to-green-400 px-8 py-3 rounded-lg text-white text-sm transition font-medium"
        >
          Launchpad
        </button>
        {!sidebarEnabled && (
          <div className="sm:hidden">
            <TiThMenu
              className={
                "text-3xl text-green-800 cursor-pointer hover:text-green-600"
              }
              onClick={() => setSidebarEnabled(true)}
            />
          </div>
        )}
        <AnimatePresence>
          {sidebarEnabled && (
            <motion.div
              variants={options}
              initial={"hidden"}
              animate={"visible"}
              exit={"hidden"}
              className="fixed w-screen h-screen bg-white top-0 left-0 py-4 px-4"
            >
              <div className="flex justify-end items-center border-b-2 border-gray-300">
                <MdClose
                  className={
                    "text-4xl text-green-800 cursor-pointer hover:text-green-600"
                  }
                  onClick={() => setSidebarEnabled(false)}
                />
              </div>
              <div className="mt-4">
                <a href="/" className="flex items-center gap-2 w-max">
                  <img src={Logo} alt="logo" className="w-8 inline-block" />
                  <span className="font-worksans font-semibold">Quartex</span>
                </a>
              </div>
              <ul className="mt-8 flex flex-col gap-4">
                <li className="text-gray-900 font-light font-sm">
                  <a href="/">Home</a>
                </li>
                <li className="text-gray-900 font-light font-sm">
                  <a href="/leaderboard">Leaderboard</a>
                </li>
                <li className="text-gray-900 font-light font-sm">
                  {/* <a href="/launchpad">Launchpad</a> */}
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
export default Navbar;
