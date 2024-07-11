import Formheader from "./formheader";
import Image from "next/image";
import Button from "./Button";
import imgacrademg from "../../public/images/icon-arcade.svg";
import imgadvance from "../../public/images/icon-advanced.svg";
import imgpro from "../../public/images/icon-pro.svg";
import { useDispatch, useSelector } from "react-redux";
import { setcurrentform, setformdata } from "@/store/slices/formslice";
import { useForm } from "react-hook-form";
import { FaExclamationTriangle } from "react-icons/fa";

const options = [
  { name: "Acrade", price: 90 },
  { name: "Advance", price: 120 },
  { name: "pro", price: 150 },
];
export default function Plan({}) {
  const dispatch = useDispatch();
  const currentform = useSelector((state) => state.stepform.currentform);
  const formdata = useSelector((state) => state.stepform.formdata);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { ...formdata },
  });

  const onsubmit = (data) => {
    dispatch(setformdata(data));
    dispatch(setcurrentform(currentform + 1));
  };

  return (
    <div className=" p-4 md:p-0">
      <div className="  mt-1 text-xs  text-red-500"></div>
      <div className="  mt-1 text-xs  text-red-500"></div>
      <Formheader
        subtext="You have the option of monthly or yraly billing."
        text="Select your plan"
      />

      {/* -----select cards ============= */}
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <div className="cards md:mt-10  flex flex-col md:flex-row w-full gap-2 justify-between">
          {/* ---------- FIRST CARD ---------------- */}
          <label className="card    ">
            <input
              {...register("plan", { required: true })}
              className="opacity-0"
              type="radio"
              name="plan"
              value={JSON.stringify(options[0])}
            />
            <div
              className={
                "border  plan-card rounded-lg flex gap-3  md:block  md:w-36 md:py-5 p-2 "
              }
            >
              <div className="icon mb-8">
                <Image
                  width={30}
                  height={30}
                  alt="icon-acrade"
                  src={imgacrademg}
                />
              </div>
              <div>
                <p className="font-bold mb-2">Arcade</p>
                <p className="text-xs text-gray-400">$90/mo</p>
              </div>
            </div>
          </label>
          {/* ----------- SECOND CARD ---------------- */}
          <label className="card  ">
            <input
              {...register("plan", {
                required: true,
              })}
              className="opacity-0"
              type="radio"
              name="plan"
              value={JSON.stringify(options[1])}
            />
            <div className="border plan-card rounded-lg flex gap-3  md:block  md:w-36 md:py-5 p-2 ">
              <div className="icon mb-8">
                <Image
                  width={30}
                  height={30}
                  alt="icon-acrade"
                  src={imgadvance}
                />
              </div>
              <div>
                <p className="font-bold mb-2">Advance</p>
                <p className="text-xs text-gray-400">$12/mo</p>
              </div>
            </div>
          </label>

          {/* --------------THIRD CARD ----------------- */}
          <label className="card ">
            <input
              {...register("plan", {
                required: true,
              })}
              className="opacity-0 acrade"
              type="radio"
              name="plan"
              value={JSON.stringify(options[2])}
            />
            <div className="border plan-card rounded-lg flex md:block gap-3  md:w-36 md:py-5 p-2 ">
              <div className="icon mb-8">
                <Image width={30} height={30} alt="icon-acrade" src={imgpro} />
              </div>
              <div>
                <p className="font-bold mb-2">Pro</p>
                <p className="text-xs text-gray-400">$15/mo</p>
              </div>
            </div>
          </label>
        </div>
        {errors.plan && (
          <span
            className="text-end flex mt-2 border gap-1 border-red-200 rounded-xl px-5 py-2 bg-red-100
             w-full text-red-600 text-xs"
          >
            <FaExclamationTriangle />
            At least one selection must be made
          </span>
        )}

        <div className="selectbuton items-center flex justify-center py-3 my-10 bg-gray-50 rounded-lg  gap-5">
          <p className="font-bold text-xs">Monthly</p>
          <label className="switch ">
            <input
              {...register("period")}
              type="checkbox"
              name="period"
            ></input>
            <span className="slider round"></span>
          </label>

          <p className="font-bold text-xs">Yearly</p>
        </div>

        <div className="btns  mb-5 mt-16 flex justify-between items-center">
          <Button
            onclick={() => dispatch(setcurrentform(currentform - 1))}
            type={"button"}
            text="Go Back"
          />
          <Button type={"submit"} text="Next Step" />
        </div>
      </form>
    </div>
  );
}
