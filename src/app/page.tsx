import Link from "next/link";
import { Suspense } from "react";
import { ServerComponent } from "./_components/ServerComponent";
import { SkeletonComponent } from "./_components/SkeletonComponent";


export default function Home() {
  // const randomId: number = Math.floor(Math.random() * 100);
  console.log("React server component")
  return (
    <div className="flex justify-center items-center flex-col">
      <Suspense fallback={<SkeletonComponent width="600px" height="500px" />}>
        <ServerComponent />
      </Suspense>
      <Link href="/about" className="rounded-md bg-orange-500 text-white px-5 py-3 mt-4 hover:bg-orange-600">About</Link>
    </div>
  );
}
