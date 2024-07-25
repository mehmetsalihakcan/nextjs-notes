"use client";
import React from "react";
import Hero from "@/components/Hero";
import LoginButton from "@/components/LoginButton";
import { useRouter,usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Home = () => {
  const pathname = usePathname(); //Mevcut sayfanın yolunu almak için usePathname hook u kullanıyoruz
  const router = useRouter();

  return (
    <>
      <Hero
        title="Abone ol"
        description="Açıklama"
        image="2.png"
        image2="/2.jpg"
      />
            <Hero
        title="Abone ol"
        description="Açıklama"
        image="3.png"
        image2="/3.jpg"
      />
            <Hero
        title="Abone ol"
        description="Açıklama"
        image="4.png"
        image2="/4.jpg"
      />
            <Hero
        title="Abone ol"
        description="Açıklama"
        image="5.png"
        image2="/5.jpg"
      />

      <div className="bg-red-600">Selam ben Salih</div>
      <LoginButton type="button" fullWidth onClick={()=> router.push('/auth/login')}>
        selam login button
      </LoginButton>
      <Button variant="mybutton" size={"lg"}>Button</Button>
    </>
  );
};

export default Home;
