"use client";

import Personalinfo from "./components/personalinfo";
import Plan from "./components/Plan";
import Addon from "./components/Addon";
import Summary from "./components/Summary";
import Sidebar from "./components/sidebar";
import { useSelector } from "react-redux";
import Thankspage from "./components/thankyoupage";

export default function Home() {
  // const [currentform, setcurrentform] = useState(0);
  // const [checkboxitem, setcheckitem] = useState([]);
  // const [plan_check, set_plan_check] = useState({ period: "Monthly" });
  // const [personalinfo, setpersonal] = useState({
  //   username: "",
  //   email: "",
  //   phoneNumber: "",
  // });
  // const formdata = {
  //   personal_info: personalinfo,
  //   plan: plan_check,
  //   addons: checkboxitem,
  // };

  // // Define a submit handler.
  // function onSubmit(valus) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(formdata);
  // }

  // const handleprevform = () => {
  //   setcurrentform(currentform - 1);
  // };
  let currentform = useSelector((state) => state.stepform.currentform);
  let page = [
    <Personalinfo />,
    <Plan />,
    <Addon />,
    <Summary />,
    <Thankspage />,
  ];
  return (
    <main className="h-screen ">
      <div className=" card flex justify-center h-screen items-start md:items-center">
        {/* --------  OVERALL CONTAINER---------------- */}
        <div className="row relative gap-3 w-[800px] md:p-4 flex justify-between border items-stretch">
          {/* ----------- FIRST COLUMN --------------- */}
          <Sidebar />

          {/* ----------SECOND COLUMN ------------------- */}

          <div className="col p-4 bg-white rounded-lg absolute  md:top-0 md:left-0 top-36 m-auto left-6  md:relative w-[90%] md:w-8/12">
            {page[currentform]}
          </div>
        </div>
      </div>
    </main>
  );
}
