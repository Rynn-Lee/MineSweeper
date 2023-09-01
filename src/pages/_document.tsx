import { services } from '@/services'
import { Html, Head, Main, NextScript } from 'next/document'
import { useState, useEffect } from 'react' 

export default function Document() {
  const [theme, setTheme] = useState('dark')

  useEffect(()=>{
    const getTheme = services.localstorage.getItem('theme')
    if(!getTheme){
      setTheme('dark')
      services.localstorage.setItem('theme', 'dark')
    }
    else{
      setTheme(getTheme)
    }
  }, [theme])

  return (
    <Html lang="en" data-theme={theme}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
