import { useEffect, useRef } from "react"

export const useRecorder = (observable: any, storage: string, encode?: boolean) => {
  const firstRender = useRef(true)
  const latestData = useRef(observable)

  useEffect(()=>{
    if(observable == latestData.current){return}
    !firstRender.current && assembleData()
    firstRender.current = false
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observable])

  const assembleData = () => {
    const observableCopy = JSON.parse(JSON.stringify(observable))
    const entries = Object.keys(observable)
    entries.map((item: any) => observableCopy[item] = encode ? encoder(observable[item]) : observable[item])
    localStorage.setItem(storage, JSON.stringify(observableCopy))
  }

  const encoder = (data: any) => {
    return btoa(JSON.stringify(data))
  }
}