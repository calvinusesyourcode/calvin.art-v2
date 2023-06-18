import Metatags from "@/components/Metatags"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/Home.module.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useEffect } from "react"

export default function DennisPage(props) {
    const create_p = (array) => {
        return array.map((text, i) => (
            <p className={styles.p} key={i}>{text}</p>
        ))}
    
    useEffect(() => {
    //get height of quotes div
    const quotes = document.getElementById("quotes")
    const quotes_height = quotes.offsetHeight
    //set height of below div
    document.getElementsByClassName("below")[0].style.height = quotes_height + "px"
    document.getElementById("quotes-image").style.height = quotes_height + "px"
    }, [])

    const text1 = `Hello Dennis!  \n \n   I hope all is well and I trust you are working hard as always. \n\n Let's go straight to it: \n\n I want to be your CTO => Chief Technology Officer. \n \n The vision is to dawn a new era of NSC and Aslan where technology
    is integrated to automate and optimize where possible, allowing the humans in the loop to focus on what's really important. \n \n I venture
    to provide extremely robust return on investment, but I am negotiable on price because I really want to work for you.`
    const text2 = `Since we last spoke I have dived deep into programming—building programs, studying algorithms and math concepts.\
    \n\n And this past month I have learned true web development (without no-code tools like wordpress or wix) by building Neil a new website.`
    const text3 = `The first thing I want to implement for NSC is the successor to that website.`
    const text4 = `Because: \n\n * Dead-simple project documentation system where employees or supervisors on-the-ground can upload pictures, notes, and other information to the project\
    \n\n * That system could also have functionality where employees can upload internal data for supervisors to see (punch in, punch out, notes, etc)\
    \n\n * Access to raw code enables deep website analytics for when I do experiments for Special Projects advertising
    \n\n * Easily connect data like project info to social media posts and blog posts automatically
    \n\n * Automate repetitive tasks that a human would have to do
    \n\n * Sidestepping providers like wordpress enables us to leverage coding abilities of artificial intelligence (AI)
    \n\n * No subscription: You own the code for your website.
    \n\n * Built within 30 days.
    \n\n And:\
    \n\n * For any additional clients you refer to me, we can discuss profit share. Something like 10%. Negotiable.
    \n\n * I will construct the website in such a manner that porting Aslan's website over, if you like, will be even easier. Retaining all the web design on there that you love.
    `
    const text5 = `Bonus:
    \n\n * I still want to do those testimonial videos. Perhaps the $1000 price tag scared you off. What about $600 for the same amount of work/quality?
    \n\n * I am in touch with some videography students and so we would love to tackle the medical sector video for NSC as well.`
    const text6 = `I am ready to start immediately and am very excited to work together.`
    return (
        <>
        <Metatags title="CTO Application" description="" image="https://firebasestorage.googleapis.com/v0/b/calvin-art.appspot.com/o/public%2Fcto.png?alt=media&token=59aaa317-89d8-4170-8782-4e827992df18" />
        <main className="no-mrg">
            <div className="blog-page f col gap">
            


            <div className="f col div pad-sides rounded">
                <ReactMarkdown>{text1}</ReactMarkdown>
            </div>
                <img src="/contributions.png" alt="example" className="rounded img" />
            <div className="f col div pad-sides rounded">
                <ReactMarkdown>{text2}</ReactMarkdown>
                <Link className="link" href="https://www.pedenindustries.ca/"><p>pedenindustries.ca</p></Link>
                <ReactMarkdown>{text3}</ReactMarkdown>
            </div>
                <img src="/example_1.webp" alt="example" className="rounded img" />
                <div className="f col div pad-sides rounded">
                <ReactMarkdown>{text4}</ReactMarkdown>
            </div>
            <img src="/example_2.webp" alt="example" className="rounded img" />
            <img src="/example_3.webp" alt="example" className="rounded img" />
            <div className="f col div pad-sides rounded">
                <ReactMarkdown>{text5}</ReactMarkdown>
            </div>
            <div className="f col div pad-sides rounded">
                <ReactMarkdown>{text6}</ReactMarkdown>
            </div>
            <div className="f gap div rounded quote-cover-div below">
                <img id="quotes-image" src="/Hubble_ultra_deep_field.jpg" className="fade fit-width3"></img>
                <div id="quotes" className="right-on-top width-full pad-sides">
                    <div className="pad">
                        <p className="t-center">&quot;Over 20/30 year time frame I think things will be transformed beyond belief. Probably won&apos;t recognize society in 30 years.&quot;</p>
                        <div className="f gap f-center">
                            <img src="/elon.png" width="50" height="50" alt="elon" className="pfp-circle" />
                            <p>Elon Musk <br/>Rocket Engineer, Software <br />  Engineer, Inventor, Founder </p>
                        </div>
                        <p className="t-center">&quot;Will you always be able to invent another thing? The answer is yes, there&apos;s an infinite tower of possible inventions.&quot;</p>
                        <div className="f gap f-center">
                            <img src="/wolfram.png" width="50" height="50" alt="elon" className="pfp-circle" />
                            <p>Stephen Wolfram <br></br>
Computer Scientist, Mathematician, <br />Theoretical Physicist, Founder</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="f col f-center gap">
                </div>
        </main>
        </>
    )
}