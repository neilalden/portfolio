import { memo } from "react"
import { images } from "../../../utils/images"
import { ProjectCount } from ".."

const CampConnection = ({ index, setIndex }: { index: number, setIndex: React.Dispatch<React.SetStateAction<number>> }) => {
    return (
        <>
            <div id="video-container">
                <video
                    src="https://theoneapp.camp/wp-content/uploads/2024/08/Sequence-01_1.mp4"
                    // frameBorder="0"
                    // allowFullScreen
                    autoPlay
                    controls
                    style=
                    {{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                ></video>
            </div>
            <div className="gap-15" />
            <div className="pagination-container">
                {ProjectCount.map((_, i) => {
                    return <div key={i} className={i === index ? "pagination pagination-active" : "pagination"} onClick={() => setIndex(i)} />
                })}
            </div>
            <div className="gap-15" />
            &nbsp;<a href="https://campconnection.app/" target="_blank" rel="noopener noreferrer">Open project</a>

            <div className="project-description">
                <p>TECH STACK : </p>
                <div id="skill-items">
                    <img src={images.reactjs} className="skill-img" />
                    <img src={images.firebase} className="skill-img" />
                    <img src={images.typescript} className="skill-img" />
                    <img src={images.nodejs} className="skill-img" />
                </div>
                <div className="gap-15" />
                <p>A Camp Management App, where guests can book as a group, RV spots, and program appointments. And where camps can manage buildings, rooms, activities, meals, meeting rooms, etc. And many more features </p>
                {/* <p>Features: Water Quality Monitoring and Forecasting</p> */}
            </div>
        </>
    )
}

export default memo(CampConnection)
