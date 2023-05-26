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

                <h1>Why me?</h1>
                <span>cost-effective</span>
                <li className="tab1">I am still learning and thus am willing to work for less than I&apos;m worth, half as much as you paid me before</li>
                <li className="tab2">$100/hr =&gt; $50/hr</li>
                <li className="tab1">the average BASE salary of a CTO WITHOUT the massive leverage of AI is CAD$144,000 <Link className="link" href="https://www.glassdoor.ca/Salaries/cto-salary-SRCH_KO0,3.htm">(source)</Link> </li>
                <li className="tab2">depending on the programmer and the AI, that CTO with AI is then worth 2-10x more........</li>
                <li className="tab1">I am not asking for anywhere near that amount and yet will deliver that level of value</li>
                <li className="tab1">and my ability to deliver value will scale with the progress of AI</li>
                <li className="tab2">exponentially</li>
                <span>vision</span>
                <li className="tab1">you once called me a business coach, that is my aim</li>
                <li className="tab1">my vision for your company is multi-factorial and will evolve with you</li>

                <h1>Road map</h1>
                <span>month 1 (timing is just an estimate, may be quicker)</span>
                <span className="tab1 li">1: NSC website makeover</span>
                <span className="tab2 li">• simplified project documentation system where employees can upload project photos and add project notes</span>
                <span className="tab2 li">• check out the simple version I created for <Link href="https://pedenindustries.ca" className="link">Peden</Link></span>

                <span>~month 2</span>
                <span className="tab2 li">b: Google ads -- NSC Special Projects landing page</span>
                <span className="tab2 li">c: Google ads A/B testing -- optimize for conversion rate</span>
                <span>~month 3</span>
                <span className="tab1 li">2: automatic blog post system for both companies</span>
                <span className="tab1 li">• increase organic website traffic (&quot;SEO&quot;)</span>
                <span>~month 4 onward</span>
                <span className="tab1 li">3: Data analysis</span>
                <span className="tab1 li">4: Automatic social media content generation, video and image format, for both companies</span>
                <span className="tab1 li">• facebook, instagram, tiktok, youtube, twitter -- all</span>
                <span className="tab1 li">5: automatic email responses based on your past email responses</span>
                <span className="tab1 li">6: facebook cold outreach ads directed at wealthy farmers looking to expand their usable land</span>
                <span className="tab1 li">7: personal twitter branding</span>
                <h1>Salary request</h1>
                <span>$3200/mo</span>
                <span className="tab1 li">• 16 hours of tech work / coding per week ($50/hr)</span>
                <span className="tab2 li">• with documentation</span>
                <span className="tab1 li">+ 1 free testimonial video per month</span>
                <span className="tab2 li">• only $500 per additional video</span>
                
            </div>

        </main>
    )
}