import '@/styles/globals.css'
import { useUserData } from '@/lib/hooks'
import { createContext, useContext } from 'react';
import { UserContext } from '@/lib/context';
import Router from 'next/router';


export default function App({ Component, pageProps}) {
  const userData = useUserData();
  return (
    <UserContext.Provider value={userData}>
      <Component {...pageProps } />
    </UserContext.Provider>
  )

}
