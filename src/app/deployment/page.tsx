"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DefaultSession } from "next-auth";
import Link from "next/link";

const Deployment = ({ user }: { user: DefaultSession["user"] }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option: string) => {};

  return (
    <div>
      <div className="bg-white flex-col justify-center align-content:center w-full h-[100vh] space-y-2 text-black">
        <div className="flex content-center">
          <Image src="/logo.png" alt="logo" width="150" height="1" />
        </div>
        <h1 className="text-center font-bold text-2xl pt-5">
          Welcome <span>{user?.name}</span>
        </h1>
        <div className="grid grid-cols-3 pt-5 items-end mb-6 w-[759.5px] m-auto ">
          <div className="h-1 border-t-2 rounded border-[#AAB2C873] border-opacity-40"></div>
          <div className="text-center text-lg font-light">
            Choose from the Following
          </div>
          <div className="h-1 border-t-2 rounded border-[#AAB2C873] border-opacity-40"></div>
        </div>
        <div className="flex justify-center space-x-10">
          <button
            style={{
              width: 250,
              height: 50,
              margin: 20,
              border: "1px solid",
              borderRadius: 5,
              backgroundColor:
                selectedOption === "SelfHosting" ? "blue" : "transparent",
              color: selectedOption === "SelfHosting" ? "white" : "black",
              
            }}
            onClick={() => handleOptionClick("SelfHosting")}
          >
            Self Hosting
          </button>
          <Link href="/awsgit">
          <button
            style={{
              width: 250,
              height: 50,
              margin: 20,
              borderRadius: 5,
              border: "1px solid",
              backgroundColor:
                selectedOption === "XeroCodee Hosting" ? "blue" : "transparent",
              color: selectedOption === "XeroCodee Hosting" ? "white" : "black",
            }}
            onClick={() => handleOptionClick("XeroCodee Hosting")}
          >
            XeroCodee Hosting
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Deployment;
