//import icons
import { MdClose } from "react-icons/md";

//import images
import ArbitrumLogo from "../../assets/arb-2.png";
import OptimismLogo from "../../assets/opt.png";
import PolygonLogo from "../../assets/polygon.png";

interface NetworkPickerArgs {
  network: string;
  handleClose: () => void;
  handleChangeNetwork: (network: string) => void;
}

const NetworkPicker = (args: NetworkPickerArgs) => {
  return (
    <div className="fixed w-full h-full top-0 z-10 flex items-center justify-center bg-black bg-opacity-20 overflow-auto">
      <div className="bg-green-100 w-[90%] sm:w-[500px] rounded-lg px-4 py-8">
        <div className="text-white flex items-center justify-between text-xl">
          <div className="text-green-800 text-sm font-medium">
            Choose your network
          </div>
          <div
            onClick={args.handleClose}
            className="cursor-pointer text-green-800"
          >
            <div className="h-8 w-8 rounded-full text-green-800 flex justify-center items-center">
              <MdClose className={"text-2xl"} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-4">
          <div
            className={`flex justify-between items-center bg-green-800 px-4 py-2 rounded-lg hover:bg-green-900 cursor-pointer ${
              args.network === "arbitrum" && "border-2 border-green-200"
            }`}
            onClick={() => {
              args.handleChangeNetwork("arbitrum");
              args.handleClose();
            }}
          >
            <img src={ArbitrumLogo} className="w-[50px]" />
            <h4 className="text-white text-xl">Arbitrum</h4>
            <div className="text-gray-300 text-xs rounded-full border border-gray-300 w-16 flex justify-center">
              default
            </div>
          </div>
          <div
            className={`flex justify-between items-center bg-green-800 px-4 py-2 rounded-lg hover:bg-green-900 cursor-pointer ${
              args.network === "optimism" && "border-2 border-green-200"
            }`}
            onClick={() => {
              args.handleChangeNetwork("optimism");
              args.handleClose();
            }}
          >
            <img src={OptimismLogo} className="w-[50px]" />
            <h4 className="text-white text-xl">Optimism</h4>
            <div className="text-gray-300 text-xs rounded-full border border-gray-300 w-16 flex justify-center opacity-0">
              default
            </div>
          </div>
          <div
            className={`flex justify-between items-center bg-green-800 px-4 py-2 rounded-lg hover:bg-green-900 cursor-pointer ${
              args.network === "polygon" && "border-2 border-green-200"
            }`}
            onClick={() => {
              args.handleChangeNetwork("polygon");
              args.handleClose();
            }}
          >
            <img src={PolygonLogo} className="w-[50px]" />
            <h4 className="text-white text-xl">Polygon</h4>
            <div className="text-gray-300 text-xs rounded-full border border-gray-300 w-16 flex justify-center opacity-0">
              default
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkPicker;
