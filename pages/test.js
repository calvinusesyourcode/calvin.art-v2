import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs'
import styles from "../styles/FireAnimation.module.css";

export const getStaticProps = async () => {
  try {
    const data = await fs.promises.readFile('./public/fire_gif.json', 'utf8');
    console.log("done");
    return { props: { gif: JSON.parse(data) } };
  } catch(err) {
      console.error('Caught:', err);
  }
}

export default function GifASCII(props) {
  const canvasRef = useRef(null);
  const { gif } = props;

  console.log("y length", gif[0].length)

  useEffect(() => {
    const draw = async () => {
      const fontSize = 10;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      while (gif[0][0].length < canvas.width/fontSize) {
        for (let frame = 0; frame < gif.length; frame++) {
          for (let y = 0; y < gif[frame].length; y++) {
            gif[frame][y] = gif[frame][y].concat(gif[frame][y])
          }
        }
      }
      
      
      const alphabet = '01'
      

      context.fillStyle = 'rgba(0, 0, 0, 1)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = fontSize + 'px monospace';
      const yDelta = canvas.height - gif[0].length*fontSize
      
      const renderFrame = (frame) => {
        context.fillStyle = 'rgba(0, 0, 0, 1)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        for (let y = 0; y < gif[frame].length; y++) {
          for (let x = 0; x < gif[frame][0].length; x++) {
            const rgb = gif[frame][y][x];
            const text = "`.-':_,^=;><+!rc*/z?sLTv)J7(|Fi{C}fI31tlu[neoZ5Yxjya]2ESwqkP6h9d4VpOGbUAKXHm8RD#$Bg0MNWQ%&@"[Math.round((rgb[0] + rgb[1] + rgb[2])/765*91)]
            context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
            context.fillText(text, x*fontSize, y*fontSize+yDelta+4);
          }
        }
        // frame = frame > 1000 ? -1 : frame
        setTimeout(() => {
          renderFrame((frame+1)%gif.length)
        }, 1000/12)
        
      }
      renderFrame(0)
    }

    setTimeout(() => {
      draw()
    }, 500)
  }, [])

return (
  <>
      <style>
        {`html { background-color: #000000; overflow: hidden; }`}
      </style>
      <div>
        <canvas ref={canvasRef} width="100px" height="100px"/>
      </div>
    </>
  );
}