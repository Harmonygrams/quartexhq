//import icons
import { MdVerified } from "react-icons/md";

type waitlistRow = {
  email: string;
  points: number;
};
const WaitlistRow = (waitlistRow: waitlistRow) => {
  return (
    <tr className="border-b">
      <td className="py-2 font-light text-center">{waitlistRow.email}</td>
      <td className="py-2 font-light text-center flex justify-center items-center">
        <MdVerified className={"text-green-600"} />
      </td>
      <td className="py-2 font-light text-center">{waitlistRow.points}</td>
    </tr>
  );
};
export default WaitlistRow;
