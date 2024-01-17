import { url } from "inspector";
import * as React from "react";

export interface TrendItemProps {
  district: String;
  img: String;
}

export default function TrendItem(props: TrendItemProps) {
  let style = {
    backgroundImage: "url(" + props.img + ")",
  };
  return (
    <div
      style={style}
      className="shadow h-32 w-28 md:w-32 lg:w-44 flex flex-col-reverse bg-no-repeat bg-cover rounded-xl text-center"
    >
      <div className="h-16 overflow-hidden flex items-center justify-center bg-gradient-linear rounded-b-xl" style={{boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.08)"}}>
        <span className="text-white font-semibold capitalize">{props.district}</span>
      </div>
    </div>
  );
}
