import axios from "axios";
const joinWaitlist = (data: object) => {
  const response = axios({
    method: "POST",
    url: "http://localhost:5001/join-waitlist",
    data: data,
  });
  return response;
};
const leaderboard = () => {
  const response = axios({
    url: "http://localhost:5001/fetch-leaderboard",
    method: "GET",
  });
  return response;
};
export { joinWaitlist, leaderboard };
