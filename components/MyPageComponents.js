import Link from 'next/link';
import Image from 'next/image';
import AuthCheck from './AuthCheck';
import router from 'next/router';
export function NeilQuote(props) {
    return (
    <div className='simple-flex t-center gap no-wrap f-center'>
        <Image className='pfp' width="50" height="50" alt= 'Neil Smith' src="https://firebasestorage.googleapis.com/v0/b/peden-bdb54.appspot.com/o/uploads%2FjGqY7k75ipNKc1J7470XsY39nkm1%2FDSCN3269.JPG?alt=media&token=6c585164-8a4e-4063-a033-3e25fdc264fd" />
        <p id="neil-quote">&quot;Gimme a call and I&#39;ll come take a look at the job and give you an estimate, free of charge.&quot;</p>
        <Link href="tel:6043417374" id="call-button-id">
            <button className='btn-green no-mrg'>Call</button>
        </Link>
    </div>
    )};

export function PromotionCard(props) {
    return (
    <div>
        <h2>* New *</h2>
                  <p className='peden-card pad grn'>
                    Hey, it&apos;s Neil. Right now I&apos;m trying out a new promotion: <b>5% off for newcomers!</b>
                    <br></br><br></br>
                    You get to save hundreds or even thousands and still get the same service I&apos;ve been at for years.
                  </p>
                </div>
                  
    )}

export function Motto(props) {
    return (
        <div>
                      <h2>Neil&apos;s motto</h2>
                      <p className='peden-card pad'>&quot;My prices are competitive and my standards are high...
               But if somehow you don&apos;t like the work we do, just fire me!&quot;</p>
        </div>
    )}

export function MadeEasy(props) {
    return (
        <div>
            <h2>Made easy</h2>
            <p className='peden-card pad'>50 years experience means you&apos;ve got the right team for the job: We&apos;re efficient and effective with your time and money.
            {props.add && (
                <>
                <br></br>
                <br></br>
                {props.add}
                </>
            )}
            </p>
        </div>
    )
}
export function Teamwork(props) {
    return (
        <div>
                      <h2>Neil&apos;s team</h2>
                      <p className='peden-card pad'>Neil has spent years building his team. For instance, his right-hand-man Nathan has been with him for 30 years.</p>
        </div>
)}
export function JoleneReview(props) {
    return (
    <div className='simple-flex t-center f-center no-wrap gap'>
            <p className='pad' id="neil-quote">&quot;I love Neil. We&apos;ve had him back a couple of times. He gives us a quote and is usually bang-on.&quot;</p>
            <div className='simple-flex no-gap no-wrap f-center fit-width'>
              <Image className='pfp-n' width="50" height="50" alt= 'Neil Smith' src="https://firebasestorage.googleapis.com/v0/b/peden-bdb54.appspot.com/o/uploads%2FjGqY7k75ipNKc1J7470XsY39nkm1%2F1684078253201_0.webp?alt=media&token=39190e10-c61e-4d9e-a3d3-1f03e3035903" />
              <div className='down-flex'>
                <Link href="/calvin/1684088514628">
                  <p className='no-mrg t-left'>Jolene</p>
                  <p className='link no-mrg t-left'>See project</p>
                </Link>
              </div>
            </div>
          </div>
)}
//modify the below function so that the current page is not included in the list of services
export function ServiceButtons(props) {
    let pathname = "/";
    try {
        pathname = router.pathname;
    }
    catch {
        console.log("No router")
    }
    return (
        <>
            {(pathname == '/') && <h1>Services</h1>}
            {(pathname !== '/') && <h2>Other services</h2>}

            <div className='service-cards mrg-ends'>
                {(pathname !== '/land-clearing') && <Link href='/land-clearing'><button className='btn-peden'>Land Clearing & Excavation</button></Link>}
                {(pathname !== '/site-grading') && <Link href='/site-grading'><button className='btn-peden'>Site Grading</button></Link>}
                {(pathname !== '/brush-cutting') && <Link href='/brush-cutting'><button className='btn-peden'>Brush Cutting & Mulching</button></Link>}
                {(pathname !== '/drainage') && <Link href='/drainage'><button className='btn-peden'>Drainage Services</button></Link>}
                <AuthCheck fallback={<></>}>
                    <Link href="/upload">
                    <button className='btn-peden grn'>Upload</button>
                    </Link>
                </AuthCheck>
            </div>
        </>
    )
}

export function Tags(props) {
    return (
        <>
            <div className='simple-flex f-start2 gap-tiny'>
            <svg id="tag_svg" className='svg-icon' height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360.73 395.12"><path  className='yellow' d="M359.25,203.63a74.73,74.73,0,0,0,14.58-54C356.7,7.11,351.19,3,210,25.88A74.85,74.85,0,0,0,162.27,54.6L30,229.57a80.66,80.66,0,0,0,15.68,113L114,394.24a80.65,80.65,0,0,0,113-15.69ZM251.1,143.11a29,29,0,1,1,40.64-5.5A29,29,0,0,1,251.1,143.11Z" transform="translate(-13.63 -15.44)"/></svg>                <span className='card-tags'>
                    {props.tags}
                </span>
            </div>
        </>
    )
}   

export function Day(props) {
    return (
        <>
            <div className='simple-flex f-start2 gap-tiny'>
            <svg id="calendar_svg" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344.83 366.75"><path className='yellow' d="M339.3,35.55H306V13.63H265.69V35.55H122.31V13.63H82V35.55H48.7A27.11,27.11,0,0,0,21.59,62.66v290.6A27.12,27.12,0,0,0,48.7,380.38H339.3a27.12,27.12,0,0,0,27.11-27.12V62.66A27.11,27.11,0,0,0,339.3,35.55Zm4.6,309.53a12.78,12.78,0,0,1-12.78,12.78H56.88A12.78,12.78,0,0,1,44.1,345.08V99.88A12.79,12.79,0,0,1,56.88,87.09H331.12A12.79,12.79,0,0,1,343.9,99.88Z" transform="translate(-21.59 -13.63)"/></svg>
            <span className='card-tags'>
                    {props.day}
                </span>
            </div>
        </>
    )
}   

export function ProjectLength(props) {
    return (
        <>
            <div className='simple-flex f-start2 gap-tiny'>
                <svg id="clock_svg" className='svg-icon' height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"><path d="M194,32A165,165,0,1,0,359,197,165,165,0,0,0,194,32Zm0,297.5c-72.9,0-132-59.32-132-132.5S121.1,64.5,194,64.5,326,123.82,326,197,266.9,329.5,194,329.5Z" className='yellow' transform="translate(-29 -32)"/><path className='yellow' d="M283.65,222.36l-73.77-32.55,13.58-55.76a6.8,6.8,0,0,0-5-8.21l-14-3.41a6.79,6.79,0,0,0-8.21,5L180.7,191.31a14,14,0,0,0,9.46,20.4L272.35,248a6.8,6.8,0,0,0,9-3.47l5.82-13.19A6.79,6.79,0,0,0,283.65,222.36Z" transform="translate(-29 -32)"/></svg>
                <span className='card-tags'>
                    {`${props.duration} days`}
                </span>
            </div>
        </>
    )
}

export function ProjectSize(props) {
    return (
        <>

            <div className='simple-flex f-start2 gap-tiny'>
            <svg id="size_svg" className='svg-icon' height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327 328"><polygon className='yellow' points="286.5 40.5 286.5 173 327 173 327 0 155.5 0 155.5 40.5 286.5 40.5"/><polygon className='yellow' points="171.5 287.5 40.5 287.5 40.5 156 0 156 0 328 171.5 328 171.5 287.5"/></svg>
             <span className='card-tags'>
                    {props.size < 1 ? `${props.size} acre` : `${props.size} acres`}
                </span>
            </div>
        </>
    )
}

export function ClockIcon() {
    return (
        <>
            <svg id="clock_svg" className='svg-icon' height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"><path d="M194,32A165,165,0,1,0,359,197,165,165,0,0,0,194,32Zm0,297.5c-72.9,0-132-59.32-132-132.5S121.1,64.5,194,64.5,326,123.82,326,197,266.9,329.5,194,329.5Z" className='yellow' transform="translate(-29 -32)"/><path className='yellow' d="M283.65,222.36l-73.77-32.55,13.58-55.76a6.8,6.8,0,0,0-5-8.21l-14-3.41a6.79,6.79,0,0,0-8.21,5L180.7,191.31a14,14,0,0,0,9.46,20.4L272.35,248a6.8,6.8,0,0,0,9-3.47l5.82-13.19A6.79,6.79,0,0,0,283.65,222.36Z" transform="translate(-29 -32)"/></svg>
        </>
    )
}

export function SizeIcon() {
    return (
        <>
            <svg id="size_svg" className='svg-icon' height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327 328"><polygon className='yellow' points="286.5 40.5 286.5 173 327 173 327 0 155.5 0 155.5 40.5 286.5 40.5"/><polygon className='yellow' points="171.5 287.5 40.5 287.5 40.5 156 0 156 0 328 171.5 328 171.5 287.5"/></svg>
        </>
    )
}

export function CalendarIcon() {
    return (
        <>
            <svg id="calendar_svg" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344.83 366.75"><path className='yellow' d="M339.3,35.55H306V13.63H265.69V35.55H122.31V13.63H82V35.55H48.7A27.11,27.11,0,0,0,21.59,62.66v290.6A27.12,27.12,0,0,0,48.7,380.38H339.3a27.12,27.12,0,0,0,27.11-27.12V62.66A27.11,27.11,0,0,0,339.3,35.55Zm4.6,309.53a12.78,12.78,0,0,1-12.78,12.78H56.88A12.78,12.78,0,0,1,44.1,345.08V99.88A12.79,12.79,0,0,1,56.88,87.09H331.12A12.79,12.79,0,0,1,343.9,99.88Z" transform="translate(-21.59 -13.63)"/></svg>
        </>
    )
}