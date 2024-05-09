"use client";

import liff from "@line/liff";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react";

type Profile = {
  displayName: string;
  pictureUrl: string | undefined;
  userId: string;
};

const Line = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<Profile>({
    displayName: "",
    pictureUrl: "",
    userId: "",
  });
  const router = useRouter()

  useEffect(() => {
    liff.init({ liffId: "2004885407-o7z2m791" }).then(() => {
      handleLogin();
    });
  }, []);

  const handleLogin = async () => {
    try {
      const profile = await liff.getProfile();
      const loggin = await liff.isLoggedIn();
      setIsLoggedIn(loggin);
      setUserProfile({
        displayName: profile.displayName,
        pictureUrl: profile.pictureUrl,
        userId: profile.userId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    liff.logout();
    router.push('/login')
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="flex flex-col h-screen justify-center items-center">
          <Image
            src="https://profile.line-scdn.net/0heG1-geidOmgcVConqzZEF2wEOQI_JWN6N2B2WyBVMVwlZXRrYmVxXS5SMw11ZSlsZ2ZyWXpRZV8QR00OAgLGXBtkZ1kgYXQ3NDd0iA"
            alt={""}
            width={400}
            height={400}
          />
          <div className="flex flex-col justify-center items-center">
            <span className="text-xl mt-6">
              displayName: {userProfile.displayName}
            </span>
            <span className="text-xl">userId: {userProfile.userId}</span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-[#ED0800] text-white px-5 py-3 rounded-lg mt-2"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col h-screen justify-center items-center">
          <h1>your have not logged in</h1>
          <Link
            href="/login"
            className="bg-[#4681f4] text-white px-3 py-4 rounded-lg mt-4"
          >
            go to login
          </Link>
        </div>
      )}
    </>
  );
};

export default Line;
