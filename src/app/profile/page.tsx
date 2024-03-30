import { NextPage } from "next";
import { Profile } from "@/components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const Page: NextPage = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export default Page;
