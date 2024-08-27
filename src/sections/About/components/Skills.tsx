import { images } from '../../../utils/images'

const Skills = () => {
    return (
        <div id="skills">
            <div className="skill-row">
                <div className="skill-percent">
                    <p className="percent">80%</p>
                    <div className="bar-container">
                        <div className="bar" style={{ width: "80%" }} />
                    </div>
                </div>
                <div id="skill-items">
                    <img src={images.reactjs} className="skill-img" />
                    <img src={images.typescript} className="skill-img" />
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
                    <img src={images.reactNative} className="skill-img" />
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
                    <img src={images.nextjs} className="skill-img" />
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
    )
}

export default Skills