
import Brand from "./components/brand";

import Footer from './components/footer'
import { Suspense } from "react";
import LogoSlider from "./components/logoslide";
import HomePage from "./components/logo";
import HeroSlider from "./components/slider0";
import Image from "next/image";
import logo from '../../public/eye.png';
import CardSection from "./components/cardsection";
import CardSection2 from "./components/cardsection2";
import Link from "next/link";




export default function Home() {
  return (
   <main className="overflow-x-hidden overflow-y-hidden">
    <Suspense >
     <HeroSlider/>
<Brand/>

    <CardSection/>
    <CardSection2/>
<div className=" -mt-[5.5rem]">
   <LogoSlider/>
</div>
  <Footer/> 
    </Suspense>

   </main>
  );
}
