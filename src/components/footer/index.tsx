//import logo
import Logo from "../../assets/quartexLogo2.png";

//import icons
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="w-[95%] mx-auto max-w-[1300px] mt-24">
      <div className="flex flex-col gap-6 py-10 px-2 sm:flex-row sm:justify-between">
        <div>
          <a href="/" className="flex items-center gap-2 transition">
            <img src={Logo} alt="logo" className="w-8 inline-block" />
            <span className="font-worksans font-semibold text-xl">Quartex</span>
          </a>
          <h4 className="text-xl font-semibold mt-4">Verify and earn</h4>
          <a
            href="https://twitter.com/quartexhq"
            target="_blank"
            className="w-10 h-10 bg-white rounded-full flex justify-center items-center md:w-12 md:h-12"
          >
            <AiFillTwitterCircle
              className={"text-green-800 text-3xl md:text-4xl"}
            />
          </a>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Pages</h4>
          <ul>
            <li>
              <a className={"text-sm"} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={"text-sm"} href="/launchpad">
                Launchpad
              </a>
            </li>
            <li>
              <a className={"text-sm"} href="/leaderboard">
                Leaderboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
