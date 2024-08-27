import { memo } from "react"
import { images } from "../../../utils/images"
import { ProjectCount } from ".."

const ReadApp = ({ index, setIndex }: { index: number, setIndex: React.Dispatch<React.SetStateAction<number>> }) => {
    return (
        <>
            <div id="video-container">
                <iframe
                    src="https://www.loom.com/embed/b2efa17e062d4a8c9a0e5eb0d9fe8252"
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
            &nbsp;<a href="https://play.google.com/store/apps/details?id=com.readappv1" target="_blank" rel="noopener noreferrer">Open project</a>

            <div className="project-description">
                <p>TECH STACK : </p>
                <div id="skill-items">
                    <img src={images.reactNative} className="skill-img" />
                    <img src={images.reactjs} className="skill-img" />
                    <img src={images.firebase} className="skill-img" />
                </div>
                <div className="gap-15" />
                <p>This project is a collaboration of LBSCFI, UPLB, and LSPU. This project introduced me to mobile development through react native. </p>
                <p>Features: Online and offline classroom, in-app messaging</p>
            </div>
        </>
    )
}

export default memo(ReadApp)