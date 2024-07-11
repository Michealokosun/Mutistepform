import React from "react";
export default function Buttons({ text, type, onclick }) {
  return (
    <div>
      <button
        onClick={onclick}
        type={type}
        className="bg-blue-900 hover:bg-blue-700 text-white p-2 rounded-md capitalize text-sm px-3"
      >
        {text}
      </button>
    </div>
  );
}
