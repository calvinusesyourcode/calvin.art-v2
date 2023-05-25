import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ClientSVG, SocialIcon, TwitterIcon } from '@/components/SVGs'
import { ProjectOverview } from '@/components/PageComponents'
import { UserContext } from '@/lib/context'
import { useContext } from 'react'

export default function Home() {
  const { user, username } = useContext(UserContext);
  return (
    <>
      <Head>
        <title>calvin.art</title>
        <meta name="description" content="calvin.art portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='no-mrg'>
        <div className='home-page f f-col gap'>
          <Link href={'/portfolio'} className='clickable'>
            <h1 className='link'>portfolio</h1>
          </Link>






          </div>
      </main>
    </>
  )
}
