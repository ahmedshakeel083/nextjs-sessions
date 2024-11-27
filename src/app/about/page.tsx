import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ",
  description: "About the sessions",
};

export default function About(){
  return (
    <div className="flex justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-bold text-9xl">About</h1>
    </div>
  )
}