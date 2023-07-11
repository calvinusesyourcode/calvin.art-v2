import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';

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

  console.log(gif[0][0].length)

  useEffect(() => {
    for (let i = 0; i < gif.length; i++) {
      for (let j = 0; j < gif[i].length; j++) {
        gif[i][j] = gif[i][j].concat(gif[i][j])
      }
    }
    console.log(gif[0][0].length)


  

    
    
    const draw = async () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const alphabet = '01'
      
      const columns = gif[0][0].length;
      let fontSize = 10;
      context.fillStyle = 'rgba(0, 0, 0, 1)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = fontSize + 'px monospace';
      
      const renderFrame = (frame) => {
        context.fillStyle = 'rgba(0, 0, 0, 1)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = fontSize + 'px monospace';
        for (let y = 0; y < gif[frame].length; y++) {
          for (let x = 0; x < gif[frame][0].length; x++) {
            const rgb = gif[frame][y][x];
            const text = "`.-':_,^=;><+!rc*/z?sLTv)J7(|Fi{C}fI31tlu[neoZ5Yxjya]2ESwqkP6h9d4VpOGbUAKXHm8RD#$Bg0MNWQ%&@"[Math.round((rgb[0] + rgb[1] + rgb[2])/765*91)]
            context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
            context.fillText(text, x*fontSize, y*fontSize);
          }
        }
        frame = frame > 1000 ? -1 : frame
        setTimeout(() => {
          renderFrame((frame+1)%gif.length)
        }, 100)
        
      }
      renderFrame(0)
    }

    setTimeout(() => {
      draw()
    }, 500)
  }, [])

return (
  <>
      <div>
        <canvas ref={canvasRef} width="100px" height="100px"/>
      </div>
    </>
  );
}