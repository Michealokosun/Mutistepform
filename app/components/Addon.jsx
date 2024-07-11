import Button from "./Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setcurrentform, setformdata } from "@/store/slices/formslice";
import { FaExclamationTriangle } from "react-icons/fa";
const addons = [
  {
    id: 1,
    title: "online services",
    price: 1,
  },
  {
    id: 2,
    title: "larger storage",
    price: 2,
  },
  {
    id: 3,
    title: "Customized Profile ",
    price: 2,
  },
];
export default function Addon({}) {
  const dispatch = useDispatch();
  const formdata = useSelector((state) => state.stepform.formdata);
  // const ob = JSON.parse(formdata.plan);
  // console.log(ob.name);
  const currentform = useSelector((state) => state.stepform.currentform);
  const { handleSubmit, register } = useForm({
    defaultValues: { ...formdata },
  });

  const onSubmit = (data) => {
    dispatch(setformdata(data));
    dispatch(setcurrentform(currentform + 1));
  };

  return (
    <div className="">
      <div className="text">
        <h1 className="font-bold text-3xl mt-4 ">Pick add-ons</h1>
      </div>
      <div className="subtext text-xs mb-3 text-zinc-400">
        Add-ons help enhance your gamiing experence.
      </div>

      <div className="selectaddons mt-10 mb-20">
        {/* -----------first box ---------------- */}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label className="flex addonscard border px-5 py-3 rounded-md gap-3 items-center ">
            <input
              {...register("adds")}
              value={JSON.stringify(addons[0])}
              type="checkbox"
            />
            <div className="addons-details  w-full flex items-center justify-between ">
              <div>
                <p className="text-xs font-extrabold">Online service</p>
                <p className="text-gray-300 text-xs">
                  Access to mutiplayer games
                </p>
              </div>
              <div className="price">
                <p className="text-blue-600 text-sm">+$1/mo</p>
              </div>
            </div>
          </label>
          {/* --------------------- second box -------------- */}
          <label className="flex addonscard border my-4 px-5 py-3 rounded-md gap-3 items-center ">
            <input
              {...register("adds")}
              // checked={checkboxitem.includes("Larger storage")}
              // onChange={handle_addon_check_change}
              value={JSON.stringify(addons[1])}
              type="checkbox"
            />
            <div className="addons-details  w-full flex items-center justify-between ">
              <div>
                <p className="text-xs font-extrabold">Larger storage</p>
                <p className="text-gray-300 text-xs">Extra 1TB of cloud save</p>
              </div>
              <div className="price">
                <p className="text-blue-600 text-sm">+$2/mo</p>
              </div>
            </div>
          </label>
          {/* ------------------third box ------------- */}
          <label className="flex border addonscard px-5 py-3 rounded-md gap-3 items-center ">
            <input
              {...register("adds")}
              value={JSON.stringify(addons[2])}
              type="checkbox"
            />
            <div className="addons-details  w-full flex items-center justify-between ">
              <div>
                <p className="text-xs font-extrabold">Customizable Profile</p>
                <p className="text-gray-300 text-xs">
                  Custom thwmwon your Profile
                </p>
              </div>
              <div className="price">
                <p className="text-blue-600 text-sm">+$2/mo</p>
              </div>
            </div>
          </label>

          <div className="btns mt-20  flex justify-between items-center">
            <Button
              onclick={() => dispatch(setcurrentform(currentform - 1))}
              type={"button"}
              text="Go Back"
            />
            <Button type={"submit"} text="Next Step" />
          </div>
        </form>
      </div>
    </div>
  );
}
