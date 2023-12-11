"use client";
import { NextPage } from "next";
import { useSession } from "next-auth/react";

const Page: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center justify-center m-20">
      <p>
        For this moment the Profile page are waiting for Figma design!!!! ⚙️👨🏻‍💻
      </p>
      <h1>Client Session</h1>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
};

export default Page;
