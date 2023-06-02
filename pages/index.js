import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ClientSVG, SocialIcon, TwitterIcon } from '@/components/SVGs'
import { ProjectOverview } from '@/components/PageComponents'
import { UserContext } from '@/lib/context'
import { useContext, useEffect, useState } from 'react'
import Metatags from '@/components/Metatags'
import MatrixStyling from '@/components/MatrixStyling'


export default function JapaneseMatrix() {
    //const { user, username } = useContext(UserContext);
    const { speed, setSpeed } = useState()

    
    //const alphabet = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    useEffect(() => {
      const canvas = document.getElementById('matrix-canvas');
      const context = canvas.getContext('2d');
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    
      const fontSize = 30;
      const columns = canvas.width/fontSize;
    
      let waves = Array.from({ length: columns }, (_, i) => Math.floor(Math.random()*canvas.width));
      let waves2 = Array.from({ length: columns }, (_, i) => false);
      //waves = waves.filter((_, i) => i % 20 === 0);
      

      const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.06)';
        context.fillRect(0, 0, canvas.width, canvas.height);
    
        context.fillStyle = '#3bccdf';
        context.font = fontSize + 'px monospace';
        //context.fillText(`${canvas.width} by ${canvas.height}`, canvas.width/3, canvas.height/2);

        const combinedFunction = (x, canvas) => {
          x /= 220

          let a = canvas.width / 1000;
          let b = -canvas.height / 1000;
          let c = canvas.width / 500;
          let d = -canvas.height / 500;
        
          let polynomial = Math.pow(x, 3) * x;
          let sineWave = Math.sin(x);
          
          let yScaleFactor = canvas.height+(canvas.height/10)
          let combined = (x + (canvas.width*100*sineWave))/yScaleFactor;

        
          return combined;
        }
        // create 10 different waves to loop through and draw text
        // each wave is offset by some pixels and has a different x value offset
        for(let j = 0; j < 1; j++) {

          for(let i = 0; i < waves.length; i++) {
            const x = waves[i]+i+10+100;
            //const y = combinedFunction(x, canvas) + (i)*fontSize - canvas.height/2;
            const y = combinedFunction(x, canvas) + (i)*fontSize/1.2 - canvas.height/4; 
            //const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            const text = i % 2 === 0 ? 'calvin' : 'art';
            context.fillText(text, x, y/1);
      
            if(x > canvas.width && (Math.random() > 0.999 || waves2[i])){
              waves[i] = -canvas.width/3;
              waves2[i] = true;
            }
            waves[i] += 3;
          }
        }
      };
      
      setInterval(draw, 2);
    }, [])
    
    
    
    
    
  return (
    <>
      <MatrixStyling />
      <Head>
        <title>calvin.art</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main className='no-mrg'>
        <Metatags title="calvin's virtual portal" description="calvin ducharme's website" image="https://firebasestorage.googleapis.com/v0/b/calvin-art.appspot.com/o/public%2Fmatrix_pfp.png?alt=media&token=3ab0bc98-b607-400b-bcbe-2b4fb633734d" />
        <canvas className='below' id="matrix-canvas"></canvas>
        <Link className='above' href="/portfolio"><h1 className='link'>portfolio</h1></Link>

      </main>
    </>
  )
}
