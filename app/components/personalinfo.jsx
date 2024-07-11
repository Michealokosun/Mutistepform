"use client";
import React, { useState } from "react";
import Button from "./Button";
import Formheader from "./formheader";
import { useForm } from "react-hook-form";
import { FaExclamationTriangle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setcurrentform, setformdata } from "@/store/slices/formslice";

export default function Personalinfo({}) {
  const currentform = useSelector((state) => state.stepform.currentform);
  const dispatch = useDispatch();
  const currentformdata = useSelector((state) => state.stepform.formdata);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...currentformdata },
  });

  const onSubmit = (data) => {
    dispatch(setformdata(data));
    dispatch(setcurrentform(currentform + 1));
    console.log(errors);
  };
  return (
    <div className=" mb-6">
      <Formheader
        subtext="Please provide your name , email address, and phone number"
        text="Personal info"
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex  mt-10  flex-col mb-14 gap-9"
      >
        <div className="ussername flex flex-col ">
          <label className="text-sm " htmlFor="name">
            Name
          </label>
          {errors.username && (
            <span
              className="text-end flex justify-end
             w-full text-red-600 text-xs"
            >
              <FaExclamationTriangle />
              This field is required
            </span>
          )}
          <input
            className={`border p-1 outline-gray-300 px-3 rounded-md mt-1 placeholder:text-sm ${
              errors.username && "border border-red-600"
            }`}
            type="text"
            {...register("username", {
              required: true,
              minLength: 3,
            })}
            placeholder="Enter your Full name"
          />
          <div className="  mt-1 text-xs  text-red-500"></div>
        </div>
        <div className="email flex flex-col">
          <label className="text-sm " htmlFor="email">
            Email Address
          </label>
          {errors.email && (
            <span
              className="text-end flex justify-end
             w-full text-red-600 text-xs"
            >
              <FaExclamationTriangle />
              This field is required
            </span>
          )}
          <input
            className="border outline-gray-300 p-1 px-3 rounded-md mt-1 placeholder:text-sm"
            type="text"
            {...register("email", {
              minLength: 3,
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
            placeholder="Enter your preferred email"
          />
          <div className="  mt-1 text-xs  text-red-500"></div>
        </div>

        <div className="phone flex flex-col">
          <label className="text-sm capitalize " htmlFor="phoneNumber">
            phone number
          </label>
          {errors.phoneNumber && (
            <span
              className="text-end flex justify-end
             w-full text-red-600 text-xs"
            >
              <FaExclamationTriangle />
              This field is required
            </span>
          )}
          <input
            {...register("phoneNumber", {
              required: true,
              minLength: 4,
              maxLength: 11,
            })}
            className="border outline-gray-300 p-1 px-3 rounded-md mt-1 placeholder:text-sm"
            type="number"
            placeholder="Enter a valid phone number"
          />
          <div className="  mt-1 text-xs  text-red-500"></div>
        </div>
        <div className="btns  flex justify-end items-center">
          <Button type={"submit"} text="Next Step" />
        </div>
      </form>
    </div>
  );
}
