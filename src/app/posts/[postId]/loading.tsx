import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingPost(){
  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Skeleton className="h-[300px] w-[500px] rounded-xl" />
    </div>
  )
}