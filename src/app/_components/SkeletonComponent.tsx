type Props = {
    width: string;
    height: string;
}

export function SkeletonComponent({ width, height }: Props) {
    const boxStyle = {
        width: width,
        height: height,
        backgroundColor: "#CACACA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const textStyle = {
        color: "#808080",
        fontSize: "larger",
        fontWeight: "bold",
    }

    return (
        <div style={boxStyle}>
            <h1 style={textStyle}>Loading...</h1>
        </div>
    )
}