"use client"

import Userinfo from "@/component/Userinfo";
import React from "react";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();

  return <Userinfo user={session?.user} />;
};

export default Page;
