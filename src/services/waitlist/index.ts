import axios from "axios";
const joinWaitlist = (data: object) => {
  const response = axios({
    method: "POST",
    url: "https://sv1.quartexhq.xyz/join-waitlist",
    data: data,
  });
  return response;
};
const leaderboard = () => {
  const response = axios({
    url: "https://sv1.quartexhq.xyz/fetch-leaderboard",
    method: "GET",
  });
  return response;
};
export { joinWaitlist, leaderboard };
