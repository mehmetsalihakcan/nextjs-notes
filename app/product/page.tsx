import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>Product</div>
      <div className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Home</Link>
        <Link href="/product">Product</Link>
      </div>
    </>
  );
};

export default page;
