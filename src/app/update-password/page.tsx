import { UpdatePasswordForm } from "@/components";
import { NextPage } from "next";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Password",
};

interface NextPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page: NextPage<NextPageProps> = ({ searchParams }) => {
  return (
    <div className="container max-w-[517px] max-h-[550] mx-auto text-center mt-10 mb-44">
      <UpdatePasswordForm token={searchParams.token as string} />
    </div>
  );
};

export default Page;
