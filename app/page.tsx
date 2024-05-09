"use client";

import liff from "@line/liff";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    liff.init({ liffId: "2004885407-o7z2m791" }).then(() => {
      handleRedirect();
    });
  }, []);
  const handleRedirect = () => {
    const isLoggedIn = liff.isLoggedIn();
    isLoggedIn ? router.push("/login") : router.push("/profile");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
