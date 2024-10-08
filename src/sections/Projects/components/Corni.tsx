import { memo } from "react"
import { images } from "../../../utils/images"
import { ProjectCount } from ".."

const Corni = ({ index, setIndex }: { index: number, setIndex: React.Dispatch<React.SetStateAction<number>> }) => {

    return (
        <>
            <div id="video-container">
                <iframe
                    src="https://www.loom.com/embed/994daa8fdb5046c3bc7899a02b837311"
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
            &nbsp;<a href="https://corn-i.web.app/" target="_blank" rel="noopener noreferrer">Open project</a>
            <div className="project-description">
                <p>TECH STACK : </p>
                <div id="skill-items">
                    <img src={images.reactjs} className="skill-img" />
                    <img src={images.firebase} className="skill-img" />
                    <img src={images.python} className="skill-img" />
                    <img src={images.flask} className="skill-img" />
                    <img src={images.tensorflow} className="skill-img" />
                    <img src={images.sklearn} className="skill-img" />
                    <img src={images.numpy} className="skill-img" />
                    <img src={images.pandas} className="skill-img" />
                </div>
                <div className="gap-15" />
                <p>This project is for an undergraduate thesis for monitoring and forecasting crop soil nutrients. <br />The forecasts are made by a RNN LSTM model deployed on a flask server</p>
                <p>Features: Soil Nutrients Monitoring and Forecasting, File Upload</p>
            </div>
        </>
    )
}

export default memo(Corni)