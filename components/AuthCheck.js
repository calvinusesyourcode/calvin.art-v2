import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

// Component's children only shown to logged-in users
export default function AuthCheck(props) {
  const { username } = useContext(UserContext);

  return ["calvin","neil","nathan",].includes(username) ? props.children : props.fallback || <main><div className='page-content down-flex'><button className='btn-peden'><Link href="/enter">Sign in</Link></button><button className='btn-peden'><Link href='/2'>Return home</Link></button></div></main>
}
