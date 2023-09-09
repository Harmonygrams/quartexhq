//import hooks
import { useState } from "react";

//import components
import { Navbar, Footer, NetworkPicker } from "../../components";

//import icons
import { PiCaretDownBold } from "react-icons/pi";

const options = {
  width: "100%",
  height: "600px",
  maxWidth: "100%",
  border: 0,
  borderRadius: "10px",
};
const Launchpad = () => {
  const [network, setNetwork] = useState("arbitrum");
  const [showNetworkPicker, setShowNetworkPicker] = useState(true);
  return (
    <section>
      <Navbar />
      <div className="mt-10 w-[90%] mx-auto max-w-[800px]">
        <div>
          <button
            className="flex items-center gap-2 border-2 border-green-800 py-2 md:py-3 px-4 rounded-lg mx-auto text-green-800  bg-white hover:text-white hover:bg-gradient-to-r from-green-800 to-green-500 to-green-400"
            onClick={() => setShowNetworkPicker(true)}
          >
            <span>Change Network</span>
            <PiCaretDownBold />
          </button>
        </div>
        <div className="mx-auto w-full mt-6">
          {/* arbitrum network */}
          {network === "arbitrum" && (
            <iframe
              src="https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x330578da2DB211e8015540e722d363BFe089e2CA&chain=%7B%22name%22%3A%22Arbitrum+One%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Farbitrum.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22arb1%22%2C%22chainId%22%3A42161%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22arbitrum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Farbitrum%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=d2806730c5cff4ede75321d523481bea&primaryColor=purple"
              style={options}
            ></iframe>
          )}
          {/* optimisim network */}
          {network === "optimism" && (
            <iframe
              src="https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x51bb487F0524DC4451D62e29567BF378EBf60A95&chain=%7B%22name%22%3A%22OP+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Foptimism.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22oeth%22%2C%22chainId%22%3A10%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22optimism%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Foptimism%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=d2806730c5cff4ede75321d523481bea&primaryColor=green"
              style={options}
            ></iframe>
          )}
          {/* polygon network */}
          {network === "polygon" && (
            <iframe
              src="https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0xB8B887ECe25e7863f107c327988b919094D6f266&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=d2806730c5cff4ede75321d523481bea&theme=dark&primaryColor=green"
              style={options}
            ></iframe>
          )}
        </div>
      </div>
      <Footer />
      {showNetworkPicker && (
        <NetworkPicker
          network="arbitrum"
          handleChangeNetwork={setNetwork}
          handleClose={() => setShowNetworkPicker(false)}
        />
      )}
    </section>
  );
};

export default Launchpad;
