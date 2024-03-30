"use client";
import React from "react";
import { useSession } from "next-auth/react";

export interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
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
