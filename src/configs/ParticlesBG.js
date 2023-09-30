import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import ParticlesConfigLight from '@configs/particlesjs-config-light'
import ParticlesConfigStarsLight from '@configs/particlesjs-config-stars-light'
import ParticlesConfigStarsDark from '@configs/particlesjs-config-stars-dark'
import ParticlesConfigDark from '@configs/particlesjs-config-dark'
import React from "react"

function Particlesbg({darkTheme}){
  const loadParticles = async (main) => await loadFull(main)

  return(
    <div style={{zIndex: 1}}>
      <Particles 
      id="tsparticles"
      init={loadParticles}
      options={darkTheme ? ParticlesConfigStarsLight : ParticlesConfigStarsDark}/>
    </div>
  )
}

export const MemoizedParticles = React.memo(Particlesbg)