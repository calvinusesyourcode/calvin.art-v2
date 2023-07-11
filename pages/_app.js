import '@/styles/globals.css'
import { useUserData } from '@/lib/hooks'
import { UserContext } from '@/lib/context';


export default function App({ Component, pageProps}) {
  const userData = useUserData();
  return (
    <UserContext.Provider value={userData}>
      <Component {...pageProps } />
    </UserContext.Provider>
  )

}
