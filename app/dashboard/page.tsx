import Link from "next/link";
import React from "react";

// http://localhost:3000/dashboard  statik bir sayfadır
function Dashboard() {
  return (
    <>
      <div>Dashboard</div>
      <div className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Home</Link>
        <Link href="/product">Product</Link>
      </div>
    </>
  );
}

export default Dashboard;
