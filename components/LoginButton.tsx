"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span>你好，{session.user?.name}</span>
        <button onClick={() => signOut()}>退出登录</button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn("google")}>使用 Google 登录</button>
  );
} 