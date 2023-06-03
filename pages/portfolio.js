import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ClientSVG, SocialIcon, TwitterIcon } from '@/components/SVGs'
import { ProjectOverview } from '@/components/PageComponents'
import { UserContext } from '@/lib/context'
import { useContext, useState, useRef, useEffect } from 'react'
import { firestore, postToJSON, fromMillis, serverTimestamp, storage } from '@/lib/firebase';
import AuthCheck from '@/components/AuthCheck'
import path from 'path'
import Metatags from '@/components/Metatags'
import styles from '@/styles/Home.module.css'

export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where("postType","==","portfolio")
    .orderBy('createdAt', 'desc')
    .limit(1);

  const post = (await postsQuery.get()).docs.map(postToJSON)[0];

  return {
    props: { post }, // will be passed to the page component as props
  };
}


export default function Portfolio(props) {
  const { user, username } = useContext(UserContext);

  const [title, setTitle] = useState(props.post.title);
  const [bio, setBio] = useState(props.post.bio);
  const [pfp, setPfp] = useState(props.post.pfp);
  const [consoleLog, setConsoleLog] = useState("")

  const [editing, setEditing] = useState(false);

  //pfp test
  const pfpRef = useRef(); // Create a ref

  useEffect(() => {
    if (pfpRef.current) {
      pfpRef.current.style.height = '100%'; // Set the height
    }
  }, []);

  const editToggle = (e) => {
    if (editing) {
      submitChanges(e);
    }
    setEditing(!editing);
  }
  const uploadImage = async (e) => {
    const file = e.target.files[0]
    const storageRef = storage.ref()
    const ext = path.extname(file.name)
    const fileRef = storageRef.child("public/portfolio_pfp"+ext)
    await fileRef.put(file)
    setPfp(await fileRef.getDownloadURL())
    console.log("uploaded image")
  }
  const submitChanges = async (e) => {
    e.preventDefault();
    console.log("submitting changes", user.uid)
    await firestore.collection('users').doc(user.uid).collection('posts').doc('portfolio_1').set({
      title: title,
      bio: bio,
      pfp: pfp,
      updatedAt: serverTimestamp(),
    }, { merge: true }).catch((error) => {setConsoleLog(consoleLog+"\r\n"+error)})
    console.log("submitted changes")
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='no-mrg'>
      <Metatags title="calvin.art" description="calvin's portfolio" image={"https://firebasestorage.googleapis.com/v0/b/calvin-art.appspot.com/o/public%2Fmatrix_pfp.png?alt=media&token=3ab0bc98-b607-400b-bcbe-2b4fb633734d"} />
        <div className='home-page f f-col gap'>
          <div className='div2 pad rounded f f-col gap '>
          <div className='f f-start2 gap'>
                <Image ref={pfpRef} id="pfp" className='pfp rounded' height="120" width="120" alt="pic of me" src={pfp}/>
                <div id="blurb" className='f f-col rounded div1 pad'>
                  <Link href={'/'} className='clickable'><h1 className='no-mrg'>{title}</h1></Link>
                  <p className='no-mrg'>{bio}</p>
                </div>
              {editing && (
                <div className='f f-col grow'>
                  <input className="no-mrg" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                  <textarea className='grow' type="text" value={bio} onChange={e => setBio(e.target.value)} />
                </div>
                )}
          </div>
          <div className='f f-start2 gap wrap div2'>
            <SocialIcon app="twitter"/>
            <SocialIcon app="email" />
            <SocialIcon app="github" />
            <p className='align-bottom code no-mrg'>python, javascript, html, css </p>
            </div>
            <AuthCheck fallback={<></>}>
              <div className='f f-start2 gap'>
              <button onClick={editToggle} className='btn-html'>{editing ? "submit" : "edit"}</button>
              <span>{consoleLog}</span>
              </div>
            </AuthCheck>
            </div>
            <div className='f f-col gap'>

            <ProjectOverview project="peden" color="#ffd600" styles={styles}/>
            <ProjectOverview project="glyptodon" color="url(#sunset_gradient)" styles={styles}/>
            </div>






          </div>
      </main>
    </>
  )
}
