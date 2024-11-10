import { sleep } from "../_utils/sleep";
import { Suspense } from "react";
import { ClientComponent } from "./ClientComponent";
import { ServerComponent2 } from "./ServerComponent2";
import { SkeletonComponent } from "./SkeletonComponent";


export async function ServerComponent() {
    await sleep(1000);

    return (
        <div className="w-[600px] h-[500px] bg-purple-600 flex justify-center items-center flex-col gap-2.5">
            <p className="text-white text-lg font-bold">Server Component</p>
            <ClientComponent>
                <Suspense fallback={<SkeletonComponent width="200px" height="100px" />}>
                    <ServerComponent2 />
                </Suspense>
            </ClientComponent>
        </div>
    );
}