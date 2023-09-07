import { useEffect } from 'react'

export const useObserver = (target: any, fn: Function) => {
  useEffect(()=>{
    fn()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])
}