import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
          // const user = await signIn(credentials);
          console.log(credentials);
          const user = { id: "1", name: "mehdi", password: "123" };
          if (
            user.name === credentials.username &&
            user.password === credentials.password
          ) {
            return user;
          }
          return null;
        }
        return null;
      },
    }),
  ],
});
