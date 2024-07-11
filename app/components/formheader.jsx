import React from "react";

export default function Formheader({ text, subtext }) {
  return (
    <div>
      <div className="text">
        <h1 className="font-bold text-3xl mt-4 mb-2">{text}</h1>
      </div>
      <div className="subtext text-xs mb-3 text-zinc-400">{subtext}</div>
    </div>
  );
}
