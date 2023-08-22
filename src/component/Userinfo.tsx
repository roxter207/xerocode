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

      <div className="bg-white flex-col justify-center items-center w-full h-[100vh]">
        <div className="flex">
          <Image src="/logo.png" alt="logo" width="150" height="1" />
        </div>
      </div>
    </>
  );
};

export default Userinfo;
