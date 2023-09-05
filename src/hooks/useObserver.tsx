import { useEffect, useRef } from "react"

export const useObserver = (observable: any, storage: string, encode?: boolean) => {
  const firstRender = useRef(true)
  const latestData = useRef(observable)

  useEffect(()=>{
    if(observable == latestData.current){return}
    console.log(observable, latestData.current)
    !firstRender.current && assembleData()
    firstRender.current = false
  }, [observable])

  const assembleData = () => {
    const observableCopy = JSON.parse(JSON.stringify(observable))
    console.log(observableCopy)
    const entries = Object.keys(observable)
    entries.map((item: any) => observableCopy[item] = encode ? encoder(observable[item]) : observable[item])
    localStorage.setItem(storage, JSON.stringify(observableCopy))
    console.log(observableCopy)
  }

  const encoder = (data: any) => {
    return btoa(JSON.stringify(data))
  }
}