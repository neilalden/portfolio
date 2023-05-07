
import "./index.css"
import { images } from "../../utils/images"
import { useState } from "react"
import Skills from "./components/Skills"
import MoreAbout from "./components/MoreAbout"
const About = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <section id="about">
            <div id="info">
                <div id="profile-picture">
                    <img src={images.profilePicture} />
                </div>
                <div className="gap-15" />
                <div id="name-socials">
                    <p>NEIL ALDEN ESCOBIN</p>
                    <div >
                        <a href="https://www.facebook.com/neilEscobinn" target="_blank" rel="noopener noreferrer">
                            <img src={images.facebook} className="social-media-img" />
                        </a>
                        <a href="https://github.com/neilalden/" target="_blank" rel="noopener noreferrer">
                            <img src={images.github} className="social-media-img" />
                        </a>
                        <a href="https://www.linkedin.com/in/neilescobin/" target="_blank" rel="noopener noreferrer">
                            <img src={images.linkedin} className="social-media-img" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="gap-15" />

            <span>(+63) 997-644-7771 escobin.neil@gmail.com</span>
            <p>A SELF STARTER AND PROACTIVE DEVELOPER WHO ENJOYS BUILDING APPS WITH MACHINE LEARNING.</p>

            <div className="gap-15" />
            <div className="tab">
                <div className={`tab-item ${toggle ? "" : "tab-active"}`} onClick={() => setToggle(false)}><p>SKILL CONFIDENCE</p></div>
                <div className={`tab-item ${toggle ? "tab-active" : ""}`} onClick={() => setToggle(true)}><p>MORE ABOUT ME</p></div>
            </div>
            {toggle ? <MoreAbout /> : <Skills />}
        </section>
    )
}
export default About