import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post ID",
  description: "Post ID",
};

export default async function PostID({ params }: {
  params: { postId: string };
}){
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const { postId } = params;
  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-bold text-8xl">Post ID {postId}</h1>
    </div>
  )
}