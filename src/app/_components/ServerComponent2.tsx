import { sleep } from "../_utils/sleep";

export async function ServerComponent2() {
    await sleep(1000);

    return (
        <div className="w-[200px] h-[100px] bg-purple-600 flex items-center justify-center">
            <h1 className="text-white text-[15px] font-bold">Server Component 2</h1>
        </div>
    )
}