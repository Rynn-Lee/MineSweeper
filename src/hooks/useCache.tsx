import { useEffect, useRef, useState } from "react";

const getDate = () =>{
  const date = new Date()
  return date.getTime()/1000
}
const getItem = (item: string) => {
  const result: any = localStorage.getItem(item)
  return JSON.parse(result)
}
const setItem = (item: string, value: any) =>{
  const valueToSet = JSON.stringify(value)
  try{
    localStorage.setItem(item, valueToSet)
  } catch (error: any) {
    throw new Error(error)
  }
  return true
}
const removeItem = (item: string) => {
  try{
    localStorage.removeItem(item)
  } catch (error: any) {
    throw new Error(error)
  }
  return true
}

interface cacheTypes {
  storage: string;
  refetchFn?: any;
  cacheTime?: number;
  logChanges?: boolean;
  logStorage?: boolean;
  enabled?: boolean;
  rerender?: boolean
}

export default function useCache({storage, refetchFn, cacheTime = 43200, logChanges = false, logStorage = false, enabled = true, rerender = true}: cacheTypes){
  const [cachedData, setCachedData]: any = useState()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const isLoadingRef = useRef(false)

  const cachedRefData: any = useRef()
  const dataFn = () => {
      return getItem(storage)
  }

  useEffect(()=>{
    enabled && refetch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const refetch = async() => {
    rerender ? setIsLoading(true) : isLoadingRef.current = true
    const localFetchedData = getItem(storage)
    const date = new Date()

    if(!localFetchedData){
      if(!refetchFn){return[{error: "There's no data and fetchFn is not defined! Use add() first!"}]}

      const apiFetchedData = await refetchFromApi()
      apiFetchedData.error
        ? set([{error: "No Data"}], true)
        : set(apiFetchedData, true)
    }
    else{
      if(!localFetchedData.dateCached || cacheTime >= 0 || localFetchedData.dateCached + cacheTime <= (date.getTime()/1000)){
        const apiFetchedData = await refetchFromApi()
        apiFetchedData.error
          ? set(localFetchedData)
          : set(apiFetchedData, true)
      }
      else{
        set(localFetchedData)
      }
    }
    logChanges && console.log(`[CACHE] "${storage}" storage data Fetched: `, dataFn())
    rerender ? setIsLoading(false) : isLoadingRef.current = false
    return dataFn()
  }

  const refetchFromApi = async() => {
    try{
      return await refetchFn()
    } catch (err: any) {
      return {error: "No response from api!"}
    }
  }

  const set = (data: any, isApi: boolean = false) => {
    const formatted = Array.isArray(data) ? {data: [...data], dateCached: getDate()} : {...data, dateCached: getDate()}
    if(isApi){
      logStorage && console.log(`[CACHE] "${storage}" used API to get new data!`)
      setItem(storage, formatted);
      rerender ? setCachedData(formatted) : cachedRefData.current = formatted
    }
    else{
      logStorage && console.log(`[CACHE] "${storage}" used Local Storage to get data!`)
      setItem(storage, formatted);
      rerender ? setCachedData(formatted) : cachedRefData.current = formatted
    }
  }

  const add = async(data: any) => {
    const isArray = Array.isArray(data)
    let result: any
    rerender 
        ? isArray
          ? cachedData?.data?.length
            ? result = [...cachedData?.data, ...data]
            : result = data
          : cachedData?.data?.length
            ? result = {...cachedData?.data, data}
            : result = data
        : isArray
          ? cachedRefData?.current?.data?.length
            ? result = [...cachedRefData?.current?.data, ...data]
            : result = data
          : cachedRefData?.current?.data?.length
            ? result = {...cachedRefData?.current?.data, data}
            : result = data

    rerender ? setCachedData({data: result, dateCached: getDate()}) : cachedRefData.current = {data: result, dateCached: getDate()}
    setItem(storage, {data: result, dateCached: getDate()})
    return dataFn()
  }

  const clearCache = () => {
    removeItem(storage)
    set({})
  }


  const forceRefetch = () => {
    clearCache()
    return refetch()  
  }

  return {
    refetch,
    set,
    data: Array.isArray(cachedData?.data) ? cachedData?.data : cachedData,
    dataRef: Array.isArray(cachedRefData?.current?.data) ? cachedRefData?.current?.data : cachedData,
    dataFn,
    clearCache,
    forceRefetch,
    add,
    isLoading: rerender ? isLoading : isLoadingRef.current
}
}