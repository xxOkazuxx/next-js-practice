import Link from "next/link";

export default function Blog({ params, searchParams }: {
    params: { id: string }, searchParams: { title?: string }
}) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Hello Blog ID : {params.id}</h1>
            <h1 className="text-4xl font-bold">Hello Blog Title : {searchParams.title}</h1>
            <Link href="/" className="text-3xl text-blue-500 block">Back to Root</Link>
        </div>
    );
}

