import Link from "next/link";
import Image from "next/image";
import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div>
      <div className="gap-6 flex">
        <Link  href="/about/misyon">Misyon</Link>
        <Link href="/about/vizyon">Vizyon</Link>
        <Link href="/about/ekip">Ekip</Link>
        {
            /*<Image className="w-full h-52 object-cover opacity-40" alt="" src="/slider/1.jpg" width={500} height={500}></Image>*/
        }
      
      </div>
      {children}
    </div>
  );
};

export default layout;
