import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import ParticlesConfigLight from '@configs/particlesjs-config-light'
import ParticlesConfigDark from '@configs/particlesjs-config-dark'
import { useEffect, useState } from "react"
import { services } from "@/services"

export default function Particlesbg({isDarkTheme}){
  const loadParticles = async (main) => await loadFull(main)

  return(
    <div style={{zIndex: 1}}>
      <Particles 
      id="tsparticles"
      init={loadParticles}
      options={isDarkTheme ? ParticlesConfigLight : ParticlesConfigDark}/>
    </div>
  )
}