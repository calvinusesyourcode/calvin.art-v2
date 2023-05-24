import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '@/lib/context';
import Logo from './Logo'
import AuthCheck from './AuthCheck';

// Top navbar
export default function Navbar() {
    
    const { user, username } = useContext(UserContext)

    return (
        <nav className="navbar">
            <ul>
                        <AuthCheck fallback={
                            <li id="logo">
                                <Link id="logo" href="/">
                                    <svg id="logo-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="50 50 807.34 148" className='yellow'><path d="M72,38c233,.33,275-.33,508,0a8.42,8.42,0,0,1,7-6,8.26,8.26,0,0,1,6,2l98-13,2,1,32-4,7-8h14l11,8,8,3,35,25,1,3,20,14a4.44,4.44,0,0,1,4,0c1.68,1.06,2.32,3.72,1,6l4,13a5,5,0,0,1,4,3,5.12,5.12,0,0,1-2,6c.7.72,8,8.42,6,19a21.86,21.86,0,0,1-17,17l-37,1v-3a39,39,0,0,0,11-5c13.37-8.85,17-23.49,18-28L755,53c-291.33.33-391.67,1.67-683,2A26.6,26.6,0,0,0,49,76v42a23.23,23.23,0,0,0,7,16,22.74,22.74,0,0,0,13,6c316.33,0,441.67-1,758-1l-12,18c-313,0-435,1-748,1a41.29,41.29,0,0,1-36-40V76A41.11,41.11,0,0,1,72,38Zm666-1-5-7V27l-6-6-34,4-1,1L615,38Zm77,32,2-4L765,27l39,43,5-4Zm7,11c1.31-1.06,1.26-4,0-7l-9,3C816.22,80.23,820.41,81.28,822,80Z" transform="translate(20 40) scale(1.14 1)" className="yellow"/><text className="logo-text" transform="translate(86 168) scale(1 1)">PEDEN INDUSTRIES</text></svg>
                                </Link>
                                </li>
                        }>
                            <div className='simple-flex big-gap'>
                                <li>
                                    <Link href="/">
                                        <svg id="logo-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="50 50 807.34 148" className='yellow'><path d="M72,38c233,.33,275-.33,508,0a8.42,8.42,0,0,1,7-6,8.26,8.26,0,0,1,6,2l98-13,2,1,32-4,7-8h14l11,8,8,3,35,25,1,3,20,14a4.44,4.44,0,0,1,4,0c1.68,1.06,2.32,3.72,1,6l4,13a5,5,0,0,1,4,3,5.12,5.12,0,0,1-2,6c.7.72,8,8.42,6,19a21.86,21.86,0,0,1-17,17l-37,1v-3a39,39,0,0,0,11-5c13.37-8.85,17-23.49,18-28L755,53c-291.33.33-391.67,1.67-683,2A26.6,26.6,0,0,0,49,76v42a23.23,23.23,0,0,0,7,16,22.74,22.74,0,0,0,13,6c316.33,0,441.67-1,758-1l-12,18c-313,0-435,1-748,1a41.29,41.29,0,0,1-36-40V76A41.11,41.11,0,0,1,72,38Zm666-1-5-7V27l-6-6-34,4-1,1L615,38Zm77,32,2-4L765,27l39,43,5-4Zm7,11c1.31-1.06,1.26-4,0-7l-9,3C816.22,80.23,820.41,81.28,822,80Z" transform="translate(20 40) scale(1.14 1)" className="yellow"/><text className="logo-text" transform="translate(86 168) scale(1 1)">PEDEN INDUSTRIE$ </text></svg>
                                    </Link>
                                </li>
                            </div>
                        </AuthCheck>
            </ul>
        </nav>
    )
}