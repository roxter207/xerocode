import React from "react";
import { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Userinfo = ({ user }: { user: DefaultSession["user"] }) => {
  async function handleGoogleSignOut() {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  }

  return (
    <>
      {/* <div>Userinfo: {user?.name}</div>
      <div>Userinfo: {user?.email}</div>

      <button onClick={handleGoogleSignOut}>signout</button> */}

      <div className="bg-white flex-col justify-center align-content:center w-full h-[100vh] text-black">
        <div className="flex content-center">
          <Image src="/logo.png" alt="logo" width="150" height="1" />
        </div>
        <h1 className="text-center font-bold text-2xl pt-5">
          Welcome <span>{user?.name}</span>
        </h1>
        <div className="grid grid-cols-3 pt-5 items-end mb-6 w-[759.5px] m-auto">
          <div className=" h-1 border-t-2 rounded border-[#AAB2C873] border-opacity-40"></div>
          <div className="text-center text-lg font-light">
            Choose from the Following
          </div>
          <div className=" h-1 border-t-2 rounded border-[#AAB2C873] border-opacity-40"></div>
        </div>
        <button className="border rounded-md m-10 p-20">
          Developer
        </button>
        <button>
          Organization
        </button>
        <button>
          Company
        </button>
      </div>
    </>
  );
};

export default Userinfo;
