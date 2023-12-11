import {
  LoginButton,
  LogoutButton,
  LoyaltyButton,
  ProfileButton,
  RegisterButton,
} from "@/components/Buttons";
import { redirect } from "next/navigation";

export default async function Home() {
  // redirect("/profile")
  return (
    <main className="flex  flex-col items-center p-24">
      <div className="flex flex-row items-center gap-4 mb-10">
        <p>Landing page ⚙️</p>
        <div>
          <LoginButton />
          <RegisterButton />
          <LogoutButton />
          <ProfileButton />
          <LoyaltyButton />
        </div>
      </div>
    </main>
  );
}
