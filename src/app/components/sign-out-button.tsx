"use client";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
const SignOutButton = () => {
  async function handleSignOut() {
    await signOut();
  }
  return (
    <Button variant="contained" onClick={handleSignOut}>
      signOut
    </Button>
  );
};

export default SignOutButton;
