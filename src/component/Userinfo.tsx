import { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Developer from "./Developer";


const Userinfo = ({ user }: { user: DefaultSession["user"] }) => {
  
  async function handleGoogleSignOut() {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  }

  
 

  return (
    <div className="bg-white flex-col justify-center align-content:center w-full h-[100vh] space-y-2 text-black">
      <div className="flex content-center">
        <Image src="/logo.png" alt="logo" width="150" height="1" />
      </div>
      <h1 className="text-center font-bold text-2xl pt-5">
        Welcome <span>{user?.name}</span>
      </h1>
      <Developer/>

      {user && (
        <button
          className="mt-4 bg-red-500 text-black py-1 px-4 rounded-md hover:bg-red-600"
          onClick={handleGoogleSignOut}
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Userinfo;
