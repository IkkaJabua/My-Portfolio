import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>Irakli </span>
            </div>
            <div className="des">
                {/* 30 */}
                I am Irakli Jabua, a Front-End Developer with nearly 2 years of experience. I specialize in React.js and modern web technologies, building interactive, high-performance, and user-friendly web applications.
            </div>
            
            <a href="/IrakliJabua.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />

            </div>
        </div>
    </section>
    )
}

export default Home
