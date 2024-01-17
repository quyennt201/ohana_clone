"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

export interface SearchProps {}

export default function Search(props: SearchProps) {
  const [selectCity, setSelectCity] = useState(false);
  const [city, setCity] = useState("HCM");

  const handleClickSelect = () => {
    setSelectCity(!selectCity);
  };

  return (
    <div className="w-max border rounded-3xl flex items-center p-2">
      <button
        className="flex relative items-center border-r"
        onClick={() => handleClickSelect()}
      >
        <FaLocationDot style={{ color: "#F7346F" }} className="mx-2" />
        <span className="w-12 text-center">{city}</span>
        <GoChevronDown className="mx-2" />
        {selectCity && (
          <div className="shadow absolute top-10 right-1 bg-white rounded-2xl">
            <p className="m-2 pb-2 border-b" onClick={() => setCity("HCM")}>
              Hồ Chí Minh
            </p>
            <p className="m-2" onClick={() => setCity("HN")}>
              Hà Nội
            </p>
          </div>
        )}
      </button>
      <input
        type="text"
        placeholder="search"
        className="w-80 ml-2 px-2 outline-none text-gray-600"
      />
      <IoSearchOutline style={{ color: "#F7346F", fontSize: 20 }} className="mr-2" />
    </div>
  );
}
