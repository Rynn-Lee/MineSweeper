import Head from "next/head";
import styles from '@styles/applayout.module.sass'
import BottomBar from "@/components/BottomBar";
import Sidebar from "@/components/Sidebar";
import { useState } from 'react'

export default function AppLayout({children, setSettings, settings, toggles}: any){
  const [openSettings, setOpenSettings] = useState(false)
  
  const setters = {setOpenSettings, toggles, setSettings}
  const getters = {openSettings, settings}

  return(
    <>
      <Head>
        <title>Minesweeper Online</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {settings.background ? <div className={styles.background}/> : <></>}
      <div className={styles.content}>
        <Sidebar
          setters={setters}
          getters={getters}/>
        {children}
        <BottomBar
          setters={setters}
          getters={getters}/>
      </div>
    </>
  )
}