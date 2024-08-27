import { memo } from "react"
import { images } from "../../../utils/images"
import { ProjectCount } from ".."

const Medicomm = ({ index, setIndex }: { index: number, setIndex: React.Dispatch<React.SetStateAction<number>> }) => {


    return (
        <>
            <div id="video-container" style={{}}>
                <img
                    style={{
                        // 
                        width: "100%",
                        minHeight: "100%",
                        borderRadius: "10px",
                    }}
                    src={images.PVET_SS}
                />
            </div>
            <div className="gap-15" />
            <div className="pagination-container">
                {ProjectCount.map((_, i) => {
                    return <div key={i} className={i === index ? "pagination pagination-active" : "pagination"} onClick={() => setIndex(i)} />
                })}
            </div>
            <div className="gap-15" />
            &nbsp;<a href="https://play.google.com/store/apps/details?id=com.pvet.druginformation&hl=en" target="_blank" rel="noopener noreferrer">Open project</a>
            <div className="project-description">
                <p>TECH STACK : </p>
                <div id="skill-items">
                    <img src={images.reactNative} className="skill-img" />
                    <img src={images.typescript} className="skill-img" />
                </div>
                <div className="gap-15" />
                <p>A veterinary clinic app, where patients can book appointments, have online consultations, look up prescriptions, etc.</p>
                <p>This is the first app I've worked as a professional mobile developer.</p>
                {/* <p>Features: Soil Nutrients Monitoring and Forecasting, File Upload</p> */}
            </div>
        </>
    )
}

export default memo(Medicomm)