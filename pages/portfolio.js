import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ClientSVG, SocialIcon, TwitterIcon } from '@/components/SVGs'
import { ProjectOverview } from '@/components/PageComponents'
import { SvgIcon } from '@/components/GlobalComponents'
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

  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    const context = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0987654321!@#$%^&*()';
    const alphabet = '01'
  
    let fontSize = (Math.floor(Math.random() * 16)) + 8;
    const columns = canvas.width/fontSize;
  
    const rainDrops = Array.from({ length: columns }).fill(canvas.height);
  
    for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
    }
  
    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);
  
      context.fillStyle = '#0F0';
      context.font = fontSize + 'px monospace';
  
      for(let i = 0; i < rainDrops.length; i++)
      
      {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
          context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
  
          if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
              rainDrops[i] = 0;
          }
          rainDrops[i]++;
      }
    };
  
    setInterval(draw, 30);
    

  }, [])


  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='no-mrg'>
      <Metatags title="calvin.art" description="calvin's portfolio" image={"https://firebasestorage.googleapis.com/v0/b/calvin-art.appspot.com/o/public%2Fmatrix_pfp.png?alt=media&token=3ab0bc98-b607-400b-bcbe-2b4fb633734d"} />
        <div className='home-page f col gap'>
          <div className='div pad rounded f col gap'>
          <div className='f justify-start gap '>
                <div className='below rounded' style={{ height: '100px', width: '100px' }}>
                  <canvas id="matrix-canvas" style={{ height: '100px', width: '100px' }} className='matrix-canvas rounded right-on-top' />
                  <Image ref={pfpRef} id="pfp" style={{ mixBlendMode: 'multiply', height: '100px', width: '100px' }} className='rounded right-on-top' height="300" width="300" alt="pic of me" src={"https://firebasestorage.googleapis.com/v0/b/calvin-art.appspot.com/o/public%2Fmatrix_pfp_cutout.png?alt=media&token=2aabe716-2104-4a3d-949a-6510461bfc59"}/>
                  <Image ref={pfpRef} id="pfp" style={{ mixBlendMode: 'screen', opacity: "70%", height: '100px', width: '100px' }} className='rounded right-on-top' height="300" width="300" alt="pic of me" src={"https://firebasestorage.googleapis.com/v0/b/calvin-art.appspot.com/o/public%2Fmatrix_pfp_cutout.png?alt=media&token=2aabe716-2104-4a3d-949a-6510461bfc59"}/>
                </div>
                <div id="blurb" className='f col rounded div-2nd pad shrink'>
                  <Link href={'/'} className='clickable'><h1 className='no-mrg'>{title}</h1></Link>
                  <p className='no-mrg'>{bio}</p>
                </div>
              {editing && (
                <div className='f col grow'>
                  <input className="no-mrg" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                  <textarea className='grow' type="text" value={bio} onChange={e => setBio(e.target.value)} />
                </div>
                )}
          </div>
          <div className='f f-start2 gap wrap div2'>
            <Link href="mailto:calvinducharme@gmail.com"><SvgIcon icon='email' width='32'/></Link>
            <Link href="https://github.com/calvinusesyourcode"><SvgIcon icon='github' width='32'/></Link>
            {/* <Link href="https://twitter.com/calvinducharme"><SvgIcon icon='twitter' width='32'/></Link> */}
            <p className='align-bottom monospace no-mrg'>python, javascript, html, css </p>
            </div>
            <AuthCheck fallback={<></>}>
              <div className='f f-start2 gap'>
              <button onClick={editToggle} className='btn-html'>{editing ? "submit" : "edit"}</button>
              <span>{consoleLog}</span>
              </div>
            </AuthCheck>
            </div>
            {/* <audio id="mysterious" controls muted autoplay loop>
              <source src="mario-paint_mysterious.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio> */}

            <div className='f col gap'>
              <ProjectOverview project="peden" color="#ffd600"/>
              <ProjectOverview project="glyptodon" color="url(#sunset_gradient)"/>
            </div>






          </div>
      </main>
    </>
  )
}
