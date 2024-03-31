import { NextPage } from "next";
import { Brand } from "@/components";
import { LoginForm } from "@/components/Forms";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage: NextPage = () => {
  return (
    <div className="container max-w-[517px] max-h-[550] mx-auto text-center mt-20">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
