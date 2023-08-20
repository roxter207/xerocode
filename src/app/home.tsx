import React from "react";
import { DefaultSession } from "next-auth";

const HomePage = ({ user }: { user: DefaultSession["user"] }) => {
  return (
    <>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
    </>
  );
};

export default HomePage;
