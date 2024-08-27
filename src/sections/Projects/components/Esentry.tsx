import { memo } from "react"
import { images } from "../../../utils/images"
import { ProjectCount } from ".."

const Esentry = ({ index, setIndex }: { index: number, setIndex: React.Dispatch<React.SetStateAction<number>> }) => {
    return (
        <>
            <div id="video-container">
                <iframe
                    src="https://www.loom.com/embed/ab6219642cf14a5f8ff8ad715c80e90d"
                    frameBorder="0"
                    allowFullScreen
                    style=
                    {{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                ></iframe>
            </div>
            <div className="gap-15" />
            <div className="pagination-container">
                {ProjectCount.map((_, i) => {
                    return <div key={i} className={i === index ? "pagination pagination-active" : "pagination"} onClick={() => setIndex(i)} />
                })}
            </div>
            <div className="gap-15" />
            &nbsp;<a href="https://github.com/neilalden/esentry/" target="_blank" rel="noopener noreferrer">Open project</a>

            <div className="project-description">
                <p>TECH STACK : </p>
                <div id="skill-items">
                    <img src={images.reactNative} className="skill-img" />
                    <img src={images.firebase} className="skill-img" />
                    <img src={images.python} className="skill-img" />
                    <img src={images.flask} className="skill-img" />
                    <img src={images.tensorflow} className="skill-img" />
                    <img src={images.sklearn} className="skill-img" />
                    <img src={images.numpy} className="skill-img" />
                    <img src={images.pandas} className="skill-img" />
                </div>
                <div className="gap-15" />
                <p>I interned for my college professor for a project for Department Of Science and Technology. The Project was for monitoring and forecasting water quality in tadlac lake. The forecasts are made by a RNN LSTM model deployed on a flask server</p>
                <p>Features: Water Quality Monitoring and Forecasting</p>
            </div>
        </>
    )
}

export default memo(Esentry)
