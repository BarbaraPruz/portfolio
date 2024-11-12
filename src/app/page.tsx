//import Image from "next/image";
import { Hero } from "@/components/hero";
/*
create next app build message:
Route (app)                              Size     First Load JS
┌ ○ /                                    5.46 kB         105 kB
└ ○ /_not-found                          896 B           101 kB
+ First Load JS shared by all            99.9 kB
  ├ chunks/4bd1b696-80bcaf75e1b4285e.js  52.5 kB
  ├ chunks/517-d083b552e04dead1.js       45.5 kB
  └ other shared chunks (total)          1.88 kB

*/
export default function Home() {
  console.log('home')
  return (
    <>
      <Hero />
    </>
  );
}