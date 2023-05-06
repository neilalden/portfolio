
import "./index.css"
import { images } from "../../utils/images"
const About = () => {
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
            <p>SKILL CONFIDENCE</p>
            <div id="skills">
                <div className="skill-row">
                    <div className="skill-percent">
                        <p className="percent">80%</p>
                        <div className="bar-container">
                            <div className="bar" style={{ width: "80%" }} />
                        </div>
                    </div>
                    <div id="skill-items">
                        <img src={images.reactNative} className="skill-img" />
                        <img src={images.reactjs} className="skill-img" />
                        <img src={images.javascript} className="skill-img" />
                        <img src={images.html} className="skill-img" />
                        <img src={images.css} className="skill-img" />
                        <img src={images.git} className="skill-img" />
                        <img src={images.firebase} className="skill-img" />
                    </div>
                </div>

                <div className="skill-row">
                    <div className="skill-percent">
                        <p className="percent">60%</p>
                        <div className="bar-container">
                            <div className="bar" style={{ width: "60%" }} />
                        </div>
                    </div>
                    <div id="skill-items">
                        <img src={images.nextjs} className="skill-img" />
                        <img src={images.nodejs} className="skill-img" />
                        <img src={images.python} className="skill-img" />
                        <img src={images.sklearn} className="skill-img" />
                        <img src={images.numpy} className="skill-img" />
                        <img src={images.pandas} className="skill-img" />
                    </div>
                </div>

                <div className="skill-row">
                    <div className="skill-percent">
                        <p className="percent">40%</p>
                        <div className="bar-container">
                            <div className="bar" style={{ width: "40%" }} />
                        </div>
                    </div>
                    <div id="skill-items">
                        <img src={images.postgres} className="skill-img" />
                        <img src={images.flask} className="skill-img" />
                        <img src={images.tensorflow} className="skill-img" />
                    </div>
                </div>

                <div className="skill-row">
                    <div className="skill-percent">
                        <p className="percent">20%</p>
                        <div className="bar-container">
                            <div className="bar" style={{ width: "20%" }} />
                        </div>
                    </div>
                    <div id="skill-items">
                        <img src={images.cSharp} className="skill-img" />
                        <img src={images.java} className="skill-img" />
                        <img src={images.mysql} className="skill-img" />
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About