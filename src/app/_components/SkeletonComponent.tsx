type Props = {
    width: string;
    height: string;
}

export function SkeletonComponent({ width, height }: Props) {
    return (
        <div className={`flex justify-center items-center bg-[#CACACA]`} style={{ width, height }}>
            <h1 className="text-[#808080] text-lg font-bold">Loading...</h1>
        </div>
    )
}