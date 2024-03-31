import { Brand, RegisterForm } from "@/components";
import { NextPage } from "next";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

const RegisterPage: NextPage = () => {
  return (
    <div className="container max-w-[517px] max-h-[550] mx-auto text-center mt-10">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
