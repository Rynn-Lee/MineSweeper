import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { increment } from "bb26";

const WarnWindow = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0px;
  left: 0px;
  bottom: 44px;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const TopTitle = styled.div`
  position: relative;
  background: var(--var-warn-bg);
  width: 100vw;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
`
const Message = styled.div`
  position: relative;
  background: var(--var-warn-bg2);
  width: 100vw;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  min-height: 300px;
`


export default function useWarning(Props: any){
  const [state, setState] = useState({
    shown: false,
    type: '',
    message: '',
    title: '',
    encrypted: '',
    fn: ()=>{}
  })

  useEffect(()=>{
    let title: string = ""
    switch(state.type){
      case "warning": title = "Warning"; break;
      case "Error": title = "Error"; break;
      case "Notice": title = "Notice"; break;
    }
    setState({...state, title: title})
  }, [state.type])

  const addToIgnoreList = (message: string) => {
    const cipher = increment(state.message)
    const parsed = JSON.parse(Props.settings.warningsIgnoreList)
    if(!parsed.includes(state.encrypted)){
      Props.setSettings({...Props.settings, warningsIgnoreList: [...Props.settings.warningsIgnoreList, cipher]})
    }
  }

  const show = (type: string, message: string, fn?: any) => {
    setState({...state, shown: true, type, message, fn})
  }

  const WarningWrapper = () => {
    if(state.shown){
      return(
        <WarnWindow>
          <TopTitle>{state?.title}</TopTitle>
          <Message>{state?.message}</Message>
          <button onClick={()=>setState({...state, shown: false})}>Close</button>
          <button onClick={()=>addToIgnoreList(state.message)}>Add to ignore List</button>
        </WarnWindow>
      )
    }
  }

  return {WarningWrapper, show}
}