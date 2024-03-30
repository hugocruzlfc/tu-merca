import { Brand, RegisterForm } from "@/components";
import { NextPage } from "next";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

const RegisterPage: NextPage = () => {
  return (
    <div className="container max-w-[517px] max-h-[550] mx-auto text-center">
      <div className="mt-10 mb-10 flex justify-center">
        <Brand />
      </div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
