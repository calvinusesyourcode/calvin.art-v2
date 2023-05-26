import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ClientSVG, SocialIcon, TwitterIcon } from '@/components/SVGs'
import { ProjectOverview } from '@/components/PageComponents'
import { UserContext } from '@/lib/context'
import { useContext } from 'react'
import Metatags from '@/components/Metatags'

export default function Home() {
  const { user, username } = useContext(UserContext);
  return (
    <>
      <Head>
        <title>calvin.art</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='no-mrg'>
        <Metatags title="calvin.art" description="the virtual portal of calvin ducharme" image="https://firebasestorage.googleapis.com/v0/b/calvin-art.appspot.com/o/public%2Fportfolio_pfp.jpg?alt=media&token=60c509d0-1c97-43dc-9bbe-04de61ff8d47" />
        <div className='home-page f f-col gap'>
          <Link href={'/portfolio'} className='clickable'>
            <h1 className='link'>portfolio</h1>
          </Link>






          </div>
      </main>
    </>
  )
}
