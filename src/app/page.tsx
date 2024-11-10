import { Suspense } from "react";
import { ServerComponent } from "./_components/ServerComponent";
import { SkeletonComponent } from "./_components/SkeletonComponent";


export default function Home() {
  // const randomId: number = Math.floor(Math.random() * 100);
  console.log("React server component")
  return (
    <div className="flex justify-center items-center">
      <Suspense fallback={<SkeletonComponent width="600px" height="500px" />}>
        <ServerComponent />
      </Suspense>
    </div>
  );
}
