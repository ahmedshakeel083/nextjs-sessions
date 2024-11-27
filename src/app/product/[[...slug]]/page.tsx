export default function ProductID({ params } : {
  params: { slug: string[] };
}){
  if (params.slug?.length > 1) {
    return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">Product ID {params.slug[0]} and Review ID {params.slug[1]}</h1>
    </div>
    )
  } else if (params.slug?.length === 1) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-9xl font-bold">Product ID {params.slug[0]}</h1>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-9xl font-bold">All Products</h1>
    </div>
  )
}