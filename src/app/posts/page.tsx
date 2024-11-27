import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Posts",
  description: "All the Posts",
};

export default function Posts(){
  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Link href="/posts/1" className="font-bold text-8xl">Posts 1</Link>
      <Link href="/posts/2" className="font-bold text-8xl">Posts 2</Link>
      <Link href="/posts/3" className="font-bold text-8xl">Posts 3</Link>
      <Link href="/posts/4" className="font-bold text-8xl">Posts 4</Link>
    </div>
  )
}