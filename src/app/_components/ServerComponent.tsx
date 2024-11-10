import { sleep } from "../_utils/sleep";
import { Suspense } from "react";
import { ClientComponent } from "./ClientComponent";
import { ServerComponent2 } from "./ServerComponent2";
import { SkeletonComponent } from "./SkeletonComponent";


export async function ServerComponent() {
    await sleep(1000);

    const boxStyle = {
        width: "600px",
        height: "500px",
        backgroundColor: "purple",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column" as const,
        gap: "10px",
    };

    const textStyle = {
        color: "white",
        fontSize: "larger",
        fontWeight: "bold",
    }

    return (
        <div style={boxStyle}>
            <p style={textStyle}>Server Component</p>
            <ClientComponent>
                <Suspense fallback={<SkeletonComponent width="200px" height="100px" />}>
                    <ServerComponent2 />
                </Suspense>
            </ClientComponent>
        </div>
    );
}