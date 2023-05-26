import Image from "next/image"
import Link from "next/link"
export default function DennisPage(props) {
    return (
        <main className="no-mrg">
            <div className="home-page f f-col gap-tiny blue-bg">
                <div className="f gap f-start2">
                        
                    <Image height={"150"} width="150" src="https://firebasestorage.googleapis.com/v0/b/calvin-art.appspot.com/o/public%2Fcto.png?alt=media&token=59aaa317-89d8-4170-8782-4e827992df18"  />
                    <div className="f f-col f-start2">
                        <h2 className="no-mrg">Chief Technology Officer (CTO)</h2>
                        <p>&quot;The executive in charge of an organization&apos;s technological needs as well as its research and development (R&D)&quot;</p>
                    </div>
                </div>
                <h1>Why hire a CTO?</h1>
                <li className="tab1">by leveraging code, one programmer can do the work of many humans</li>
                <li className="tab2">more output for less money</li>
                <h1>Why now?</h1>
                <li className="tab1">by leveraging artificial intelligence (AI), one programmer can do the work of many programmers, compounding productivity</li>
                <p className="tab2 li">&gt; it is difficult to convey how huge this is</p>
                <li className="tab1">AI is going to revolutionize the way our world operates... civilization will be changed forever...</li>
                <li className="tab2">bottom line: non-adopters get left behind</li>
                <li className="tab2">illustration: factory farm vs man with bare hands</li>
                <li className="tab1">by optimizing your business for AI integration now, your output will scale with the development of technology</li>
                <li className="tab2">exponentially</li>

                <h1>Why me?</h1>
                <span>cost-effective</span>
                <li className="tab1">I am still learning and thus am willing to work for less than I&apos;m worth</li>
                <li className="tab1">the average BASE salary of a CTO WITHOUT the massive leverage of AI is CAD$144,000 <Link className="link" href="https://www.glassdoor.ca/Salaries/cto-salary-SRCH_KO0,3.htm">(source)</Link> </li>
                <li className="tab2">depending on the programmer and the AI, that CTO with AI is then worth 2-10x more........</li>
                <li className="tab1">I am not asking for anywhere near that amount and yet will deliver that level of value</li>
                <li className="tab1">and my ability to deliver value will scale with the progress of AI</li>
                <li className="tab2">again: exponentially</li>
                <span>vision</span>
                <li className="tab1">you once called me a business coach</li>
                <li className="tab1">my vision for your company is multi-factorial and will evolve with you</li>

                <h1>Road map</h1>
                <span className="tab1 li">1: Neil Smith Construction website</span>
                <li className="tab2"> simple project documentation system where employees can upload photos </li>
                <span className="tab1 li">2: Google Ads </span>
                <span className="tab1 li"> </span>
                
            </div>

        </main>
    )
}