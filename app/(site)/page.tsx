import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <div className="bg-red-600">
      selam nextjs ben Salih2
    </div>
    <div>Home</div>
    <div className="flex gap-8">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Home</Link>
      <Link href="/product">Product</Link>
    </div>

    </>
  );
}
