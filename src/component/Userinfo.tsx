// import React from "react";
// import { DefaultSession } from "next-auth";
// import { signOut } from "next-auth/react";
// import Image from "next/image";

// const Userinfo = ({ user }: { user: DefaultSession["user"] }) => {
//   async function handleGoogleSignOut() {
//     signOut({ callbackUrl: "http://localhost:3000/login" });
//   }

//   return (
//     <>
//       {/* <div>Userinfo: {user?.name}</div>
//       <div>Userinfo: {user?.email}</div>

//       <button onClick={handleGoogleSignOut}>signout</button> */}

//       <div className="bg-white flex-col justify-center align-content:center w-full h-[100vh] text-black">
//         <div className="flex content-center">
//           <Image src="/logo.png" alt="logo" width="150" height="1" />
//         </div>
//         <h1 className="text-center font-bold text-2xl pt-5">
//           Welcome <span>{user?.name}</span>
//         </h1>
//         <div className="grid grid-cols-3 pt-5 items-end mb-6 w-[759.5px] m-auto ">
//           <div className=" h-1 border-t-2 rounded border-[#AAB2C873] border-opacity-40"></div>
//           <div className="text-center text-lg font-light">
//             Choose from the Following
//           </div>
//           <div className=" h-1 border-t-2 rounded border-[#AAB2C873] border-opacity-40"></div>
//         </div>
//       </div>
      
//     </>
//   );
// };

// export default Userinfo;


import React, { useState } from "react";
import { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Userinfo = ({ user }: { user: DefaultSession["user"] }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  async function handleGoogleSignOut() {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setInputValue("");
    setShowInput(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submission of the input value
    console.log("Submitted:", inputValue);
  };

  return (
    <div className="bg-white flex-col justify-center align-content:center w-full h-[100vh] text-black">
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
      <div className="flex justify-center space-x-4">
        <button
          className={`border py-2 px-4 rounded-lg ${
            selectedOption === "developer" ? "bg-blue-500 text-white" : "bg-transparent"
          }`}
          onClick={() => handleOptionClick("developer")}
        >
          Developer
        </button>
        <button
          className={`border py-2 px-4 rounded-lg ${
            selectedOption === "organization" ? "bg-blue-500 text-white" : "bg-transparent"
          }`}
          onClick={() => handleOptionClick("organization")}
        >
          Organization
        </button>
        <button
          className={`border py-2 px-4 rounded-lg ${
            selectedOption === "company" ? "bg-blue-500 text-white" : "bg-transparent"
          }`}
          onClick={() => handleOptionClick("company")}
        >
          Company
        </button>
      </div>
      {showInput && (
        <div className="mt-4 text-center">
          <input
            className="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder={selectedOption}
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
      <button
        className="mt-4 bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600"
        onClick={handleGoogleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Userinfo;
