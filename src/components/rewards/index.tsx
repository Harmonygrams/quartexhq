//import icons
import { FiUsers, FiLayers } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import { RiBarChartFill } from "react-icons/ri";

const Rewards = () => {
  return (
    <section className="w-[95%] mx-auto max-w-[1300px] mt-10 md:mt-14">
      <div className="">
        <div>
          <h2 className="text-2xl font-medium text-center md:text-4xl font-semibold ">
            Proof of Physical Work (PoPW)
          </h2>
        </div>
        <div className="bg-white py-8 px-4 mt-6 rounded-lg transition flex flex-col items-between gap-6 sm:px-12 md:mx-auto shadow-sm">
          <div className="flex justify-between flex-wrap transition gap-4 sm:flex-nowrap">
            <div className="sm:w-[50%]">
              <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-green-100 transition">
                <div className="bg-green-300 w-[50px] h-[50px] flex justify-center items-center rounded-full transition p-3">
                  <FiLayers className="text-green-800 text-4xl" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium transition">NFT Identify</h3>
                <p className="text-sm text-gray-700 transition">
                  Non-fungible Reputation token representing User's digital
                  identify
                </p>
              </div>
            </div>
            <div className="sm:w-[50%]">
              <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-green-100">
                <div className="bg-green-300 w-[50px] h-[50px] flex justify-center items-center rounded-full p-3">
                  <RiBarChartFill className="text-green-800 text-4xl" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium">Rewards</h3>
                <p className="text-sm text-gray-700">
                  Rewards for time, effort energy, and contributions for early
                  supporters
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-wrap transition gap-4 sm:flex-nowrap mt-2">
            <div className="sm:w-[50%]">
              <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-green-100">
                <div className="bg-green-300 w-[50px] h-[50px] flex justify-center items-center rounded-full transition p-3">
                  <BsLightningCharge className="text-green-800 text-4xl" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium transition">
                  On-Chain Reputation
                </h3>
                <p className="text-sm text-gray-700 transition">
                  Link multiple blockchain, Web3, and Social Network accounts to
                  the same User identity
                </p>
              </div>
            </div>
            <div className="sm:w-[50%]">
              <div className="">
                <div className="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-green-100">
                  <div className="bg-green-300  w-[50px] h-[50px] flex justify-center items-center rounded-full transition p-3">
                    <FiUsers className="text-green-800 text-4xl" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-medium transition">
                    Quartex invite program
                  </h3>
                  <p className="text-sm text-gray-700 transition">
                    Incentivize users who invites friends to join our program
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
