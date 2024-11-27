"use client";
import { motion } from "framer-motion"; 

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
    >
      <p className="w-full text-center font-bold">Posts Layout</p>
      {children}
    </motion.div>
      
  );
}
