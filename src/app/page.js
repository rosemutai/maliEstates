'use client'

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'
import Ad from "@src/components/Ad";
import Subscribe from "@src/components/Subscribe";
import PageFooter from "@src/components/PageFooter";
import PlacesToLive from "@src/components/PlacesToLive";
import Reviews from "@src/components/Reviews";
// import SearchProperties from "@src/components/SearchProperties";
import TopBanner from "@src/components/TopBanner";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    })
  }, [])
  return (
    <main className="min-h-screen bg-white-50 overflow-x-hidden">
      <TopBanner />
      <Ad />
      <PlacesToLive />
      <Subscribe />
      <Reviews />
      <PageFooter />
    </main>
  )
}
