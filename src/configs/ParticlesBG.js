import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import ParticlesConfigLight from '@configs/particlesjs-config-light'
import ParticlesConfigDark from '@configs/particlesjs-config-dark'
import { useEffect, useState } from "react"
import { services } from "@/services"

export default function Particlesbg(){
  const [theme, setTheme] = useState('dark')
  const loadParticles = async (main) => await loadFull(main)

  useEffect(()=>{
    const color = services.localstorage.getItem('theme')
    if(!color){
      setTheme('dark')
      services.localstorage.setItem('theme', 'dark')
      return
    }
    setTheme(color)
  }, [theme])

  return(
    <div style={{zIndex: 1}}>
      <Particles 
      id="tsparticles"
      init={loadParticles}
      options={theme == 'light' ? ParticlesConfigDark : ParticlesConfigLight}/>
    </div>
  )
}