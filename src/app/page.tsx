import Image from "next/image";
import Main from "./components/header/header";
import Hero from "./components/hero/hero";
import Box from "./components/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
        <Main/>
        <Hero/>
        <Box/>
    </div>
  )
}