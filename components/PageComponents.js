import Link from "next/link";
import { useState } from "react";

export function ProjectOverview(props) {
    var project = props.project
    var styles = props.styles
    var infos = {
        'peden':{ "p":[
            'scope: web dev, advertising',
            'tech stack: next, react, firebase',
            'challenges: live database fetch/post, email notification system, image to webp cloud function, landing page optimization, advertising diversification',
                ],
                "a":{
                    'website':"https://www.pedenindustries.ca/",
                },
        },
        'glyptodon':{
            "p":[
            'role: band leader & singer/songwriter',
            'the dream: tour the world',
            'An indie rock band that captured most of my attention until I started coding full-time. Was really really fun and I miss it a lot but the AI revolution is just too interesting. Will definitely still try to play shows here and there.',
        ],
            "a":{
                "live performance I'm proud of":'https://www.youtube.com/watch?v=6UKhz01oRzc&t=2348s',
                "instagram":"https://www.instagram.com/glyptodonmusic/",
            }
    }
}
    const [color, setColor] = useState("white")
    const [dropdown, setDropdown] = useState(false)
    var scale = props.scale ? props.scale : '1'
    var show = false
    return (
        <>
        <div id={project+"_div"} className={"mrg-left div2 pad rounded bottom"}>
        <div id={project+"_button"} width="360" className="clickable f justify-start align-start gap no-wrap" onClick={() => {
            document.getElementById(project+"_dropdown").classList.toggle("show"); show = true
            setColor(color == "white" ? props.color : "white")
            setDropdown(!dropdown)
            }}>
                {dropdown ?
                <svg style={{minWidth: "20"}} xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 293 242"><polyline fill={color} points="293 0 0 0 147 242"/></svg>
                :
                <svg style={{minWidth: "20"}} xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 242 293"><polyline fill={color} points="0 0 0 293 242 146"/></svg>
                }
                {project == "peden" &&
                <div style={{fontFamily: "Helvetica"}}>
                    <svg id={project+"_svg"} height="50" xmlns="http://www.w3.org/2000/svg" viewBox="40 50 807.34 96">
                        <path id={project+"_path"} transform='translate(60 40) scale(.61 .6)' fill={color} d="M72,38c233,.33,275-.33,508,0a8.42,8.42,0,0,1,7-6,8.26,8.26,0,0,1,6,2l98-13,2,1,32-4,7-8h14l11,8,8,3,35,25,1,3,20,14a4.44,4.44,0,0,1,4,0c1.68,1.06,2.32,3.72,1,6l4,13a5,5,0,0,1,4,3,5.12,5.12,0,0,1-2,6c.7.72,8,8.42,6,19a21.86,21.86,0,0,1-17,17l-37,1v-3a39,39,0,0,0,11-5c13.37-8.85,17-23.49,18-28L755,53c-291.33.33-391.67,1.67-683,2A26.6,26.6,0,0,0,49,76v42a23.23,23.23,0,0,0,7,16,22.74,22.74,0,0,0,13,6c316.33,0,441.67-1,758-1l-12,18c-313,0-435,1-748,1a41.29,41.29,0,0,1-36-40V76A41.11,41.11,0,0,1,72,38Zm666-1-5-7V27l-6-6-34,4-1,1L615,38Zm77,32,2-4L765,27l39,43,5-4Zm7,11c1.31-1.06,1.26-4,0-7l-9,3C816.22,80.23,820.41,81.28,822,80Z"/>  
                        <text style={{fontSize: "82px", height: "100%", width: "100%"}} fill="white" transform={`translate(100 114) scale(.5 .5)`}>PEDEN INDUSTRIES</text>
                    </svg>
                </div>
                }
                {project == "glyptodon" &&
                <div>
                <svg id={project+"_svg"} height="50" xmlns="http://www.w3.org/2000/svg" viewBox="8 8 500 100">
                    <defs>
                        <linearGradient id="sunset_gradient" x1="253.75" y1="7.71" x2="253.75" y2="129.66" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#f6be74"/>
                            <stop offset="0.07" stop-color="#f4b875"/>
                            <stop offset="0.16" stop-color="#eda679"/>
                            <stop offset="0.27" stop-color="#e18a7f"/>
                            <stop offset="0.35" stop-color="#d77185"/>
                            <stop offset="0.71" stop-color="#8766ac"/>
                            <stop offset="1" stop-color="#4653a4"/>
                        </linearGradient>
                    </defs>
                    <path fill={color} d="M502.05,53.82c-4.4,19.22-13.2,41.92-25.2,48.72a20,20,0,0,1-10.08,2.88,18.72,18.72,0,0,1-10.32-3.6c-6.37-4.46-9.47-12.42-9.84-20.4a41.09,41.09,0,0,0-6.72,10.32c-3.64,8.08-3.44,14.84-7.92,16.56a6.58,6.58,0,0,1-6.24-1c-1.65-1.35-2.36-3.68-2.31-6.79a29.55,29.55,0,0,1-7.29,10.63c-4.42,4.08-10.87,7.19-20.88,8.64-7.06,1-12.18-.37-14.64-1.92a15.83,15.83,0,0,1-3.36-2.88c-5.23-5.8-9.65-17.6-12.24-26.4-11.85,10.1-27.43,22.95-35.76,29-3.51,2.57-8.08,5.43-12,3.84-2.62-1.06-4.32-3.86-5.28-7.44l-6.24-29.52c-2.37,16.4-11.83,31.1-26.64,38.16-5.13,2.44-21,9.19-32.16,1.68-3.56-2.4-7.73-7.53-10.08-16.8-2.7-10.64.85-31.83,13.44-57.36a68.16,68.16,0,0,1,3.94-6.69c-5.4,3.84-15.35,4.19-27.7-.27-5.44,15.57-7.27,30.62-5,45.12.7,4.57,1.75,10.63,2.4,13,2,7,4.86,13.73,2.16,20.64-1.29,3.3-3.05,5.06-4.8,6a10.06,10.06,0,0,1-7.44.72c-12.64-4-17.54-42.69-6.24-74.88a99.28,99.28,0,0,1,6.24-14.16,68,68,0,0,1-8.16-2.88,70.71,70.71,0,0,1-14.92-8.64c.27.47.53.95.76,1.44a24.25,24.25,0,0,1-.24,20.88,16,16,0,0,1-6.24,7c-6.5,3.24-14.95-.46-19.44-5.52-5.7-6.42-7.47-17.77-2.4-21.84,2.63-2.11,7-2.19,10.08-.24,5,3.22,5.56,11.42,2.64,14.16-2.13,2-6.11.34-6.72,1.68s2.7,5,6.72,5.52a5.58,5.58,0,0,0,4.08-.72c4.25-3.29,1.76-17-6.24-22.56-2.79-1.94-5.7-2.86-8.4-2.4a9.43,9.43,0,0,0-4.8,2.4c-10.13,9.71,3.13,59.72,29.52,73.92,2.71,1.46,9.4,4.61,11.28,11a13.59,13.59,0,0,1-2.88,12.72c-4.21,4.51-10.84,4.52-14.64,3.6-12.87-3.12-17.73-22.25-24.72-44.4-3.76-11.91-7.87-23.52-12.48-35.28A134.53,134.53,0,0,1,144,68.7c-5.49,25.83-20.07,57.6-32.88,56.64-3.24-.24-6.62-2.61-7.59-5.58s.55-6.45,2.33-8.39a11.77,11.77,0,0,1,3.34-2.35c1.64-.82,4.69-3.74,7.44-6.72,7-7.58,11.39-21,13-33.6a21.38,21.38,0,0,1-11.52,9.36c-3.4,1.11-7.62,1.62-11.28.24-9.1-3.42-14-17.37-14.17-30.13C89.31,60,81.49,76.52,79.41,88.14,78,95.86,77.47,107,81.57,108.78c.75.33,2.17.35,4.08-.48,3.06-1.33,3.77-4.57,6.72-5.28a4.78,4.78,0,0,1,4.56,1.2c1.28,1.47,1,4,0,6.43-2.07,5.36-8.39,9.51-14.65,9.17a16.15,16.15,0,0,1-11-5.76c-4.27-5-5-12.7-3.79-21.2-1.68,3.51-4.73,7.59-10.61,11.36-13.27,8.51-37,10.64-47-3.12C1.74,90.09,6.93,75,9.09,69.9c7.59-17.81,28.25-30.37,36.24-25.44,2.43,1.5,4,4.81,3.12,6.72C47.7,52.77,45,53,40.77,53.82c-.94.18-1.86.37-2.76.58a31.44,31.44,0,0,0-14,8.06A30.26,30.26,0,0,0,15.09,78.3c-.8,4-2.16,14.59,3.6,19.92,10,9.24,35.11-1.15,36.48-11.28.23-1.72-.05-4.69-1.92-5.76-4.51-2.58-13.15,9.19-22.8,7.68-1.95-.3-5.45-1.3-7-4.08C22.22,82.44,22.41,79,25.65,73.5a24.72,24.72,0,0,1,19.44-12c8.49-.57,19.17,3.36,23.28,12.72a19.15,19.15,0,0,1,1.57,6.89c5.15-18.81,14.91-37.64,12.35-39-.82-.45-2.22,1.27-4.32.72a4.36,4.36,0,0,1-3.12-3.12c-.62-3.12,3.75-5.68,4.8-6.24,4.22-2.25,10.32-1.86,13,1.44a6.4,6.4,0,0,1,1.16,2.34c1.09-4.31,2.93-7.89,5.56-10a11.13,11.13,0,0,1,7-2.64c1.23,0,4,.39,5.76,2.4,3.07,3.62.51,10.27-1.68,17-4.55,14.05-5.28,22.38-1.68,25.68a6.2,6.2,0,0,0,1.92,1.2c4.47,1.76,9.8-2.34,11.52-3.84,2.59-2.26,5.91-7.31,7.2-15.36,1.17-7.33.91-13.71-.24-16.56a7.8,7.8,0,0,1-.48-4.8c.78-2.95,3.5-4.49,4.8-5a9.79,9.79,0,0,1,11,2.64,8.46,8.46,0,0,1,1.44,2.64C147.44,24.83,150.44,20,155,17.1c6.9-4.34,16.45-3.61,24.31.45Q177,15,174.94,12.19c-.56-1-1.12-2.53-.49-3.49.81-1.24,3.68-1.56,6.72.48,25,10.8,51.71,20.37,62.16,16.32a13,13,0,0,1,6.72-.72c3.52.74,7.71,3.62,8.64,8.16a9.49,9.49,0,0,1-.27,4.76,62.44,62.44,0,0,1,14.67-13.88c6.8-4.41,11.61-5.29,15.84-4.56,6.35,1.1,11.45,5.82,14.64,11.76L370.29,41.1c6.12-7.84,15.28-13.44,24.72-12.24,3.58.46,12.7,5,19.92,16.08,7.39,11.37,12.39,27.66,11.46,42.15.77-2.25,1.68-4.62,2.7-7.11,5.47-13.31,12.37-23.24,20.4-24.24a9.67,9.67,0,0,1,5.42.74c2.15,1,4,3.1,5.51,7.21C462.69,70,462,78.2,462.54,82.18c.77,5.31,2.21,8.2,3.65,8.66,3.46,1.1,8.4-5.18,10.1-7.64,6.59-9.49,9-23.87,11.36-31.3.47-1.48,1.47-4.29,4.08-5.52a7.33,7.33,0,0,1,7.44,1A7.57,7.57,0,0,1,502.05,53.82ZM290.13,38.46c-1-4.2-2.06-6.31-3.84-7C275.7,27.61,239.21,72.36,252,95.1c3.14,5.6,10,11.07,16.8,10.32C285.93,103.53,296,63.47,290.13,38.46Zm20.4,4.32,17.52,57.36,35.52-39.6Zm98.16,8.4c-4.11-7.88-9.85-14.28-17-14.4-4.51-.07-8.76,2.22-12.24,5.76,8.55.59,17.26,3.53,19.2,9.6a8.81,8.81,0,0,1,.24,4.32c-1.24,7.12-15.18,18.59-24.48,25.2,2.23,12.57,8.58,19.77,15.12,20.64,2.25.3,6-.26,10.32-3.36a24.35,24.35,0,0,0,5.44-5.28C411,85.92,417.29,67.68,408.69,51.18Z" transform="translate(50 0) scale(.8 .8) "/>
                </svg>
                </div>
                }
        </div>
        <div id={project+"_dropdown"} className='pad-sides dropdown'>
            {infos[project]["p"].map((info, index) => {
                console.log(info);
                return <p key={index}>{info}</p>
            })}
            {Object.entries(infos[project]["a"]).map(([key, value], index) => {
                return <Link className="link" key={index} href={value}><p className="link">{key}</p></Link>
            })}
        </div>
        </div>
        </>
    )
}