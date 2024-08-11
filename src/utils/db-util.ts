import { SignUp } from "@/app/components/sign-up";
import { db, dbInitialized } from "@/database/db";
import { NextResponse } from "next/server";

export const DbUtil = {
  findUser: async ({ username }: { username: string }) => {
    await dbInitialized;
    await db.read();
    const { users } = db.data;
    const user = users.find(
      (user: { username: string }) => user.username === username
    );
    return user;
  },
  login: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    await dbInitialized;
    await db.read();
    const { users } = db.data;
    const user = users.find(
      (user: { username: string; password: string }) =>
        user.username === username && user.password === password
    );
    return user || null;
  },
  signUp: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    await dbInitialized;
    db.read();
    const { users } = db.data;
    const newUser = {
      username,
      password,
      id: (+users.length + 1).toString(),
    };
    users.push(newUser);
    await db.write();
    return newUser;
  },
};
