import Metatags from "@/components/Metatags"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/Home.module.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function DennisPage(props) {
    const create_p = (array) => {
        return array.map((text, i) => (
            <p className={styles.p} key={i}>{text}</p>
        ))}

    const text = `Dennis,  \n \n   I want to make an offer you cannot refuse. \n \n I am willing to negotiate price but the value I shall\
    provide shall far outweigh any dollar amount you pay me.  \n \n $4200/mo  \n \n   First, the big idea:  \n \n   By leveraging code, one\
    programmer can do the work of many humans, and by leveraging artificial intelligence (AI) one programmer can do the work of many programmers.\
      \n \n   The leverage of one human's productivity is now astronomical.  \n \n   I will be your most productive employee ever.  \n \n   And the \
      infrastructure I develop will not only directly serve NSC & Aslan but can be sold to other companies (outside your niche) and you can make a percentage\
       of my revenue.  \n \n   Current scope:  \n \n   NSC website => web app  \n \n * NSC special projects  \n \n * Employees can upload photos directly to \
       projects based on location/project-assigned (think company cam, but you own the software outright and integrations with AI and whatever else can dynamically\
        be added)  \n \n * Deep website analytics + analysis  \n \n * Google ads for NSC special projects  \n \n  Automated high-quality social media posting + website\
        blog posts  \n \n * For Peden we’ve learned that a lot of the intended customers are on Facebook, and now with automation we can create a script that takes our\
        projects on the website and creates Facebook posts automatically  \n \n  Automate repetitive secretary tasks  \n \n * Simple and self-explanatory, the tasks can\
        be pretty complex as long as there is precedent to infer from  \n \n  Automate email  \n \n * Save you time from reading emails that can easily be replied to/ignored\
        based on your previous email behavior  \n \n Automate phone calls (in future) \n \n * This would require you to start recording your phone calls so we have precedent\
        for how you handle different situations, but basically in the future you only need to take the important phone calls  \n \n Analyze internal documents and propose\
        cost savings  \n \n * self explanatory and easy  \n \n In 30 days the NSC website can be up and running and soon after the Facebook/blog posting functionality can be\
        running  \n \n   The revenue share could be big because you are well connected. After the systems are built it will be easy to onboard other\
        companies.  \n \n   I’m excited for this next chapter of our working together, and to help bring NSC & Aslan into a new age of automation, efficiency, and optimization.  \n \n —Calvin`
    return (
        <>
        <Metatags title="My Application" description="Application for Dennis" image="https://firebasestorage.googleapis.com/v0/b/calvin-art.appspot.com/o/public%2Fcto.png?alt=media&token=59aaa317-89d8-4170-8782-4e827992df18" />
        <main className="no-mrg">
            <div className="home-page f f-col gap-tiny div2 pad-sides rounded">
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </main>
        </>
    )
}