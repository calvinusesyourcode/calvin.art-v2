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

    const text1 = `Dennis,  \n \n   I want to make an offer you cannot refuse. \n \n  I venture
    to provide extremely robust return on investment, but I am negotiable on price because I really want to work for you.`
    const text2 = `Since we last spoke I have dived deep into programming—building programs, studying algorithms and math concepts.\
    \n\n And this past month I have learned true web development (without no-code tools like wordpress or wix) by building Neil a new website.`
    const text3 = `The first thing I want to implement for NSC is the successor to that website.`
    const text4 = `Because: \n\n * Dead-simple project documentation system where employees or supervisors on-the-ground can upload pictures, notes, and other information to the project\
    \n\n * That system could also have functionality where employees can upload internal data for supervisors to see (punch in, punch out, notes, etc)\
    \n\n * Access to raw code enables deep website analytics for when I do experiments for Special Projects advertising
    \n\n * Easily connect data like project info to social media posts and blog posts automatically
    \n\n * Automate repetitive tasks that a human would have to do\
    \n\n * Sidestepping providers like wordpress enables us to leverage coding abilities of artificial intelligence (AI)\
    \n\n And:`
    
    const text111 = `First, the big idea:  \n \n   By leveraging code, one\
    programmer can do the work of many humans, and by leveraging artificial intelligence (AI) one programmer can do the work of many programmers.\
      \n \n   The leverage of one human's productivity is now astronomical.  \n \n   I will be your most productive employee ever.  \n \n   And the \
      infrastructure I develop will not only directly serve NSC & Aslan but can be sold to other companies (outside your niche) and you can make a percentage\
       of my revenue.  \n \n   Current scope:  \n \n   NSC website => web app  \n \n * NSC special projects  \n \n * Employees can upload photos directly to \
       projects based on location/project-assigned (think company cam, but you own the software outright and integrations with AI and whatever else can dynamically\
        be added)  \n \n Deep website analytics + analysis  \n \n * Google ads for NSC special projects  \n \n  Automated high-quality social media posting + website\
        blog posts  \n \n * For Peden we’ve learned that a lot of the intended customers are on Facebook, and now with automation we can create a system that takes our\
        projects on the website and creates Facebook posts automatically  \n \n  Automate repetitive secretary tasks  \n \n * Simple and self-explanatory, the tasks can\
        be pretty complex as long as there is precedent to infer from  \n \n  Automate email  \n \n * Save you time from reading emails that can easily be replied to/ignored\
        based on your previous email behavior  \n \n Automate phone calls (in future) \n \n * This would require you to start recording your phone calls so we have precedent\
        for how you handle different situations, but basically in the future you only need to take the important phone calls  \n \n Analyze internal documents and propose\
        cost savings  \n \n * self explanatory and easy  \n \n In 30 days the NSC website can be up and running and soon after the Facebook/blog posting functionality can be\
        running  \n \n   The revenue share could be big because you are well connected. After the systems are built it will be easy to onboard other\
        companies.  \n \n   I’m excited for this next chapter of our working together, and to help bring NSC & Aslan into a new age of automation, efficiency, and optimization.  \n \n —Calvin`
    return (
        <>
        <Head>
            <Metatags title="My Application" description="" image="https://firebasestorage.googleapis.com/v0/b/calvin-art.appspot.com/o/public%2Fcto.png?alt=media&token=59aaa317-89d8-4170-8782-4e827992df18" />
        </Head>
        <main className="no-mrg">
            <div className="blog-page f f-col gap">
            <div className="f gap div2 rounded quote-cover-div below">
                <img id="quotes-image" src="/Hubble_ultra_deep_field.jpg" className="fade fit-width3"></img>
                <div id="quotes" className="above width-full pad-sides">
                    <div className="pad">
                        <p className="t-center">&quot;Over 20/30 year time frame I think things will be transformed beyond belief. Probably won't recognize society in 30 years.&quot;</p>
                        <div className="f gap f-center">
                            <img src="/elon.png" width="50" height="50" alt="elon" className="pfp-circle" />
                            <p>Elon Musk <br/>Rocket Engineer, Software <br />  Engineer, Inventor, Founder </p>
                        </div>
                        <p className="t-center">&quot;Will you always be able to invent another thing? The answer is yes, there's an infinite tower of possible inventions.&quot;</p>
                        <div className="f gap f-center">
                            <img src="/wolfram.png" width="50" height="50" alt="elon" className="pfp-circle" />
                            <p>Stephen Wolfram <br></br>
Computer Scientist, Mathematician, <br />Theoretical Physicist, Founder</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="f f-col div2 pad-sides rounded">
                <ReactMarkdown>{text1}</ReactMarkdown>
            </div>
                <img src="/contributions.png" alt="example" className="rounded img" />
            <div className="f f-col div2 pad-sides rounded">
                <ReactMarkdown>{text2}</ReactMarkdown>
                <Link className="link" href="https://www.pedenindustries.ca/"><p>pedenindustries.ca</p></Link>
                <ReactMarkdown>{text3}</ReactMarkdown>
            </div>
                <img src="/example_1.webp" alt="example" className="rounded img" />
                <div className="f f-col div2 pad-sides rounded">
                <ReactMarkdown>{text4}</ReactMarkdown>
            </div>
            <img src="/example_2.webp" alt="example" className="rounded img" />
            </div>
            <div className="f f-col f-center gap">
                </div>
        </main>
        </>
    )
}