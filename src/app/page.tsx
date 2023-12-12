import {
  LoginButton,
  LogoutButton,
  LoyaltyButton,
  ProfileButton,
  RegisterButton,
} from "@/components/Buttons";

export default async function Home() {
  return (
    <>
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
    </>
  );
}
