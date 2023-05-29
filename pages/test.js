import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const pfp = "https://firebasestorage.googleapis.com/v0/b/calvin-art.appspot.com/o/public%2Fmatrix_pfp.png?alt=media&token=3ab0bc98-b607-400b-bcbe-2b4fb633734d"

export default function Portfolio(props) {

  // Other code...

  const pfpRef = useRef(); // Create a ref
  const divRef = useRef(); // Create a ref

  useEffect(() => {
    if (pfpRef.current) {
      pfpRef.current.style.height = '100%'; // Set the height
    }
    if (divRef.current) {
      console.log("div",divRef.current.style.height)
    }
  }, []);

  return (
    <>
    <div className='f f-start2 gap'>
        <Image ref={pfpRef} id="pfp" className='pfp rounded' height="100" width="100" alt="pic of me" src={pfp}/>
      <div ref={divRef} className='pad div2'>hi</div>
    </div>
      </>
  );
}