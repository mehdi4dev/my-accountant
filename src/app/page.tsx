"use server";

import { auth } from "./auth";

import SignOutButton from "./components/sign-out-button";
import { AuthTabs } from "./components/auth-tab";

export default async function Home() {
  const session = await auth();
  if (!session?.user) return <AuthTabs />;

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <SignOutButton />
    </div>
  );
}
