import { Suspense } from "react";
import { ServerComponent } from "./_components/ServerComponent";
import { SkeletonComponent } from "./_components/SkeletonComponent";


export default function Home() {
  // const randomId: number = Math.floor(Math.random() * 100);
  console.log("React server component")
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Suspense fallback={<SkeletonComponent width="400px" height="300px" />}>
        <ServerComponent />
      </Suspense>
    </div>
  );
}
