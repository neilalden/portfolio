import { memo } from "react"
import { images } from "../../../utils/images"

const SortVisualizer = ({ index, setIndex }: { index: number, setIndex: React.Dispatch<React.SetStateAction<number>> }) => {
    const Projects: Array<number> = [1, 1, 1, 1]
    return (
        <>
            <div id="video-container">
                <iframe
                    src="https://www.loom.com/embed/48e6027c89344d638bf2ebed35390b17"
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
                {Projects.map((_, i) => {
                    return <div key={i} className={i === index ? "pagination pagination-active" : "pagination"} onClick={() => setIndex(i)} />
                })}
            </div>
            <div className="gap-15" />
            &nbsp;<a href="https://neilalden.github.io/sort-visualizer/" target="_blank" rel="noopener noreferrer">Open project</a>

            <div className="project-description">
                <p>TECH STACK : </p>
                <div id="skill-items">
                    <img src={images.javascript} className="skill-img" />
                    <img src={images.html} className="skill-img" />
                    <img src={images.css} className="skill-img" />
                </div>
                <div className="gap-15" />
                <p>I made this project to practice my data structures and algorithms skills</p>
                <p>Features: Sort Visualization</p>
            </div>
        </>
    )
}

export default memo(SortVisualizer)