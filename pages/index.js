import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ClientSVG, SocialIcon, TwitterIcon } from '@/components/SVGs'
import { ProjectOverview } from '@/components/PageComponents'
import { UserContext } from '@/lib/context'
import { useContext, useEffect } from 'react'
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
        <Metatags title="calvin's virtual portal" description="calvin ducharme's website" image="https://firebasestorage.googleapis.com/v0/b/calvin-art.appspot.com/o/public%2Fmatrix_pfp.png?alt=media&token=3ab0bc98-b607-400b-bcbe-2b4fb633734d" />
        <Link className='above link' href="/portfolio"><h1>portfolio</h1></Link>


      </main>
    </>
  )
}
