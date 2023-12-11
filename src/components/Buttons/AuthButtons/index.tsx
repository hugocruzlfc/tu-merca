"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <Link
      style={{ marginRight: 10 }}
      href="/login"
    >
      Sign in
    </Link>
  );
};

export const RegisterButton = () => {
  return (
    <Link
      href="/register"
      style={{ marginRight: 10 }}
    >
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button
      style={{ marginRight: 10 }}
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return (
    <Link
      href="/profile"
      style={{ marginRight: 10 }}
    >
      Profile
    </Link>
  );
};

export const LoyaltyButton = () => {
  return <Link href="/loyalties">Loyalties</Link>;
};
