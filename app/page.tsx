'use client'

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(process.env.LINE_CLIENT_SECRET)
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
