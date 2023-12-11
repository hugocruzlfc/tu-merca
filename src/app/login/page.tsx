import { NextPage } from "next";
import { Brand } from "@/components";
import { LoginForm } from "@/components/Forms";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage: NextPage = () => {
  return (
    <div className="container max-w-[517px] max-h-[550] mx-auto text-center">
      <div className="mt-10 mb-10 flex justify-center">
        <Brand />
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
