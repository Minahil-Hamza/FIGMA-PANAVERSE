'use client'
import CoreTracks from "@/app/components/sections/CoreTracks"
import Hero from "@/app/components/sections/Hero"
import SpecializedTracks from "@/app/components/sections/SpecializedTracks"
import Outcome from "@/app/components/sections/Outcome"

export default function Home(){
  return( <>
    <main>
      {/* Hero Section*/}
<Hero/>
 {/*Core Tracks Section*/}
<CoreTracks />

<SpecializedTracks/>

   {/*Specialized Tracks*/}
<Outcome/>

    </main>

    </>
  )
}
