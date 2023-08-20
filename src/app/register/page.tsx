import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-white w-full h-[100vh]  flex-col text-black grid grid-cols-2 ">
      <div className="flex-row justify-center p-10 ">
        <div className="w-[150px] h-[35px] ml-60 mb-4">
          <Image src="/logo.png" alt="logo" width="150" height="1" />
        </div>
        <h1 className="text-center font-bold text-2xl pt-5">Hello!</h1>
        <div className="grid grid-cols-3 pt-5 items-end mb-6">
          <div className="h-1 border-t-2 rounded border-[#AAB2C873] border-opacity-40"></div>
          <div className="text-center text-lg font-light">
            Create Your Account
          </div>
          <div className=" h-1 border-t-2 rounded border-[#AAB2C873] border-opacity-40"></div>
        </div>
        <div className="flex flex-row mb-4">
          <form className="w-full " method="POST">
            <input
              className="w-full h-[35px]  mb-4 border rounded pl-5  outline-none font-light"
              placeholder="First Name"
            />
            <input
              className="w-full h-[35px]  mb-4 border rounded pl-5 outline-none font-light"
              placeholder="Last Name"
            />
            <input
              className="w-full h-[35px]  mb-4 border rounded pl-5 outline-none font-light"
              placeholder="Email ID"
            />
            <input
              className="w-full h-[35px]  mb-4 border rounded pl-5 outline-none font-light"
              placeholder="Password"
            />
            <input
              className="w-full h-[35px]  mb-4 border rounded pl-5 outline-none font-light"
              placeholder="Confirm Password"
            />
            <button className="bg-[#1F64FF] w-full h-[40px] text-center text-white rounded-md">
              SIGN UP
            </button>
          </form>
        </div>

        <div className="text-center mb-4">
          <h4 className="text-[#00002280]">OR</h4>
        </div>

        <div className="grid grid-cols-2 mb-4">
          <div className="mr-2">
            <button className="flex items-center border rounded-md w-full space-x-2 pl-5 h-[50px]">
              <div>Sign Up With GOOGLE</div>
              <Image src="/image1.png" alt="github" width={34} height={34} />
            </button>
          </div>
          <div className="ml-2">
            <button className="flex items-center border rounded-md w-full space-x-2 pl-5 h-[50px]">
              <div>Sign Up With GITHUB</div>
              <Image src="/image2.png" alt="github" width={34} height={34} />
            </button>
          </div>
        </div>

        <h4 className=" text-center">
          Already have an Account? <span className="text-[#1F64FF]"> <Link href='/login'>LOGIN</Link></span>
        </h4>
      </div>

      <div className="flex-row justify-center align-center border-l-2 rounded-sm items-center">
        <div className="pl-20 pt-10 w-full items-center">
          <Image
            src="/image6.png"
            alt="image-1"
            width={450}
            height={100}
            
          />
        </div>
        <div className="pt-5 w-full object-cover">
          <Image src="/vector.png" alt="wave" width={750} height={10} />
        </div>
      </div>
    </div>
  );
};

export default page;
