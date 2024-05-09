"use client";

import liff from "@line/liff"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    liff.init({ liffId: "2004885407-o7z2m791" });
  }, []);
  const handleLineLogin = () => {
    try {
      liff.login();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button
        onClick={handleLineLogin}
        className="bg-[#06c755] px-6 py-2 text-white rounded-md"
      >
        Line login
      </button>
    </>
  );
};

export default Login;
