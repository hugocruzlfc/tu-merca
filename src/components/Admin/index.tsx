"use client";

import React from "react";
import { useSession } from "next-auth/react";

export const Admin: React.FC = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>loading...</div>;
  }

  if (session?.user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
    return <div>you are not an admin</div>;
  }
  return <div>hi</div>;
};
