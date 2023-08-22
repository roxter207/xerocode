import React from "react";
import { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";

const Userinfo = ({ user }: { user: DefaultSession["user"] }) => {
  async function handleGoogleSignOut() {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  }

  return (
    <>
      <div>Userinfo: {user?.name}</div>
      <div>Userinfo: {user?.email}</div>

      <button onClick={handleGoogleSignOut}>signout</button>
    </>
  );
};

export default Userinfo;
