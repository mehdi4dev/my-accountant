import { db, dbInitialized } from "@/database/db";
import { JSONFilePreset } from "lowdb/node";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DbUtil } from "@/utils/db-util";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, _req) => {
        if (credentials) {
          if (!credentials) return null;

          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/auth`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  action: "signin",
                  username: credentials.username,
                  password: credentials.password,
                }),
              }
            );
            const user = await response.json();

            if (response.ok && user) {
              return user;
            } else {
              return null;
            }
          } catch (error) {
            console.error("Error during sign-in:", error);
            return null;
          }
        }
      },
    }),
  ],
  // pages: {
  //   signIn: "/components/sign-in", // Adjust the path according to your project
  // },
});
