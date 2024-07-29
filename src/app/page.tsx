"use server";
import { SignIn } from "./components/sign-in";
import { auth } from "./auth";

import SignOutButton from "./components/sign-out-button";

export default async function Home() {
  const session = await auth();
  if (!session?.user) return <SignIn />;

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <SignOutButton />
    </div>
  );
}
