//import hooks
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

//import components
import { Navbar, Footer, Waitlist, WaitlistRow } from "../../components";

//import loaders
import { ColorRing } from "react-loader-spinner";

//import services
import { leaderboard } from "../../services/waitlist";

const Leaderboard = () => {
  const [leaderboardBest, setLeaderboardBest] = useState([]);
  const leaderboardQuery = useQuery({
    queryKey: ["LEADERBOARD"],
    queryFn: () => leaderboard(),
    onSuccess: (data) => {
      setLeaderboardBest(data.data.data);
    },
  });
  return (
    <section>
      <Navbar />
      <div className="w-[95%] mx-auto max-w-[1300px] mt-24">
        <h2 className="text-2xl font-medium text-center md:text-4xl font-semibold ">
          See Top 5 On Our Leaderboard
        </h2>
        <div className="px-4 mt-10 bg-white rounded-lg ">
          <table className="w-full">
            <thead className="">
              <tr className="border-b border-gray-200">
                <th className="text-sm font-semibold py-4 px-4 text-center">
                  Email
                </th>
                <th className="text-sm font-semibold py-4 px-4 text-center">
                  Status
                </th>
                <th className="text-sm font-semibold py-4 px-4 text-center">
                  Points
                </th>
              </tr>
            </thead>

            <tbody className="">
              {leaderboardBest.slice(0, 5).map(({ _id, email, points }) => {
                return <WaitlistRow email={email} points={points} key={_id} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <ColorRing
          visible={leaderboardQuery.isLoading}
          height="40"
          width="40"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["green", "green", "green", "green", "green"]}
        />
      </div>
      <Waitlist />
      <Footer />
    </section>
  );
};
export default Leaderboard;
