import Link from "next/link";
import styles from "@/app/ui/home.module.css";

export default function Home() {
  const randomId: number = Math.floor(Math.random() * 100);
  return (
    <div className="mt-10">
      <div className={styles.shape}></div>
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Link className="text-3xl text-blue-500 block" href="/about">About</Link>
      <Link className="text-3xl text-blue-500 block" href={`/blog/${randomId}`}>Blog</Link>
    </div>
  );
}
