import { db } from "@/database/db";
import { DbUtil } from "@/utils/db-util";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { action, ...data } = await request.json();

  switch (action) {
    case "signin":
      return handleSignIn(data);
    case "signup":
      return handleSignUp(data);
    // case "signout":
    //   return handleSignOut();
    default:
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }
}

export async function handleSignIn({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const user = await DbUtil.login({ username, password });
    if (user) {
      return NextResponse.json(user);
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
export async function handleSignUp({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const user = await DbUtil.findUser({ username });
    if (user) {
      return NextResponse.json(
        { error: "User allready exist" },
        { status: 200 }
      );
    }

    const newUser = await DbUtil.signUp({ username, password });
    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
