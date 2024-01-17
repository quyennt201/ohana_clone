import React from "react";
import TrendItem from "../components/TrendItem";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="mx-2">
      <div className="flex-col">
        <h1 className="text-3xl py-8 font-bold text-text">xu huong tim kiem</h1>
        <div className="flex justify-between">
          <TrendItem
            district="binh thanh"
            img="https://www.ohanaliving.vn/4d99b9c4047ed44e88d916c96a16462f.jpg"
          />
          <TrendItem
            district="quan 10"
            img="https://www.ohanaliving.vn/942f65c3633188ad20aef85af3cc6cb9.jpg"
          />
          <TrendItem
            district="quan 1"
            img="https://www.ohanaliving.vn/c24f2f4900e66ad42bc5819ef97687c3.jpg"
          />
          <TrendItem
            district="quan 7"
            img="https://www.ohanaliving.vn/820479a65182bbe3c48ac1649d82aa8a.jpg"
          />
          <TrendItem
            district="thu duc"
            img="https://www.ohanaliving.vn/56357e2482d5e085d5439d64308b8ccf.jpg"
          />
          <TrendItem
            district="quan 3"
            img="https://www.ohanaliving.vn/954a28da0e0c77e373bdfdc41c22c1c3.jpg"
          />
        </div>
      </div>

    </div>
  );
}
