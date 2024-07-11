import Image from "next/image";
import React from "react";
import check from "../../public/images/icon-thank-you.svg";

export default function Thankspage() {
  return (
    <div className="flex justify-center my-28  h-fit  items-center  flex-col">
      <div className="icon">
        <Image src={check} alt="logo" />
      </div>
      <div>
        <h1 className="font-bold text-3xl my-2">Thank you!!</h1>
      </div>

      <div className="text text-sm">
        <p className="text-center ">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
