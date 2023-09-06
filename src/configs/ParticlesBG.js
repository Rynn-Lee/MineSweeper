import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import ParticlesConfigLight from '@configs/particlesjs-config-light'
import ParticlesConfigDark from '@configs/particlesjs-config-dark'
import React from "react"

function Particlesbg({darkTheme}){
  const loadParticles = async (main) => await loadFull(main)

  return(
    <div style={{zIndex: 1}}>
      <Particles 
      id="tsparticles"
      init={loadParticles}
      options={darkTheme ? ParticlesConfigLight : ParticlesConfigDark}/>
    </div>
  )
}

export const MemoizedParticles = React.memo(Particlesbg)