import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setcurrentform } from "@/store/slices/formslice";
export default function Summary({}) {
  const dispatch = useDispatch();
  const currentform = useSelector((state) => state.stepform.currentform);
  const formdata = useSelector((state) => state.stepform.formdata);
  const plan = JSON.parse(formdata.plan);

  const adds = formdata.adds.map((item) => {
    return JSON.parse(item);
  });

  return (
    <div className="mb-10">
      <div className="text">
        <h1 className="font-bold text-3xl mt-4 mb-2">Finishing up</h1>
      </div>
      <div className="subtext text-xs mb-3 text-zinc-400">
        Double-check everything looks OK before confirming.
      </div>

      <div className="summary bg-blue-50 mb-10 p-5 rounded-lg">
        <div className="flex justify-between mb-4 items-center">
          <p className="font-bold text-blue-950 capitalize">
            {plan.name}({formdata.period ? "Yearly" : "Monthly"})
          </p>
          <p>${plan.price}</p>
        </div>
        <hr />

        <div>
          {adds.map((item) => (
            <div className="flex justify-between capitalize text-xs text-gray-500 items-center my-4">
              <p>{item.title}</p>
              <p className="text-sm font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="total text-gray-500 text-sm">
        <p>Total (per {formdata.period ? "year" : "month"})</p>
        <p>{}</p>
      </div>

      <div className="btns mt-20  flex justify-between items-center">
        <Button
          onclick={() => dispatch(setcurrentform(currentform - 1))}
          text="Go Back"
        />
        <Button
          onclick={() => dispatch(setcurrentform(currentform + 1))}
          text="Confirm"
          type={"submit"}
        />
      </div>
    </div>
  );
}
