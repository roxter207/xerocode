import React from "react";
import { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";

const Userinfo = ({ user }: { user: DefaultSession["user"] }) => {
    async function handleGoogleSignOut(){
        console.log("click hogaya")
        signOut({ callbackUrl: 'http://localhost:3000/login' })
        console.log("kuch galat hua")
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
