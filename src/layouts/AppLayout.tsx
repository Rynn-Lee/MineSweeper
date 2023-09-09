import Head from "next/head";
import styles from '@styles/applayout.module.sass'
import { BottomBar } from "@/components/BottomBar";
import { Sidebar } from "@/components/Sidebar";
import GameLoader from "@/components/GameLoader";
import AccountSettings from "@/components/Bottombar/AccountSettings";

export default function AppLayout({children, toggles, setters, getters}: any){

  return(
    <>
      <Head>
        <title>Minesweeper Online</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {getters.isSetup ? <GameLoader setters={setters} getters={getters}/> : <></>}
      {getters.settings.background ? <div className={styles.background}/> : <></>}
      <div className={styles.content}>
        <Sidebar
          setters={setters}
          getters={getters}/>
        {children}
        <AccountSettings
          getters={getters} 
          setters={setters}/>
        <BottomBar
          setters={setters}
          getters={getters}/>
      </div>
    </>
  )
}