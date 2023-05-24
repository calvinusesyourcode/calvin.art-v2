import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ClientSVG, SocialIcon, TwitterIcon } from '@/components/SVGs'
import { ProjectOverview } from '@/components/PageComponents'

export default function Home() {
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
          <div className='f f-start2 gap wrap'>
            <Link href={'/'} className='clickable'>
              <Image height="100" width="100" alt="pic of me" src="https://media.licdn.com/dms/image/C4E03AQGIYK3XldkWTg/profile-displayphoto-shrink_800_800/0/1610592340250?e=2147483647&v=beta&t=MTpZSvvvg4ae3vJnelBgNFq1sFZessIJq7e_zndbn-g"/>
            </Link>
            <div className='f f-col'>
              <Link href={'/'} className='clickable'><h1 className='no-mrg'>calvin.art</h1></Link>
              <p>Hi, I&apos;m Calvin. I&apos;m a full-stack web developer and artist currently exploring the leverage of intelligent systems.</p>
            </div>
          </div>
          <div className='f f-start2 gap wrap'>
            <SocialIcon app="twitter"/>
            <SocialIcon app="email" />
            <SocialIcon app="github" />
            <i>html, css, javascript, python </i>
            </div>
            <hr />
            <div className='f f-col gap'>
            <ProjectOverview project="peden" color="#ffd600"/>
            <ProjectOverview project="glyptodon" color="url(#sunset_gradient)" />
            </div>






          </div>
      </main>
    </>
  )
}
