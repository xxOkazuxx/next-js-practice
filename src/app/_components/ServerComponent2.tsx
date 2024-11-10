import { sleep } from "../_utils/sleep";

export async function ServerComponent2() {
    await sleep(1000);

    const boxStyle = {
        width: "200px",
        height: "100px",
        backgroundColor: "purple",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    const textStyle = {
        color: "white",
        fontSize: "15px",
        fontWeight: "bold",
    }

    return (
        <div style={boxStyle}>
            <h1 style={textStyle}>Server Component 2</h1>
        </div>
    )
}