export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p className="w-full text-center font-bold">About Layout</p>
      {children}
    </div>
      
  );
}
