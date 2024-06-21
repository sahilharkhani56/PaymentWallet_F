import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useEffect, useState } from "react";
import axios from "axios";
export const Dashboard = () => {
  const [balance, setBalance] = useState();
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/v1/account/balance`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(response=>{
        var round = Math.round;
        var x = round(response.data.balance);
        setBalance(x);
    });
  });
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};
