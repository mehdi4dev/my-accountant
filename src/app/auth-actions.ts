"use server";

import {
  signIn as signInAuth,
  signOut as signOutAuth,
  auth as authSession,
} from "@/app/auth";
import { revalidatePath } from "next/cache";

export async function signIn(credentials: {
  username: string;
  password: string;
}) {
    
  return await signInAuth("credentials", {...credentials,redirectTo:'/dashboard'});
}

export async function signOut() {
  return await signOutAuth();
}

export async function getSession() {
  return await authSession();
}
