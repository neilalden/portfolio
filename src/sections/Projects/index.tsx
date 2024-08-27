import { useEffect, useState } from "react"
import Corni from "./components/Corni"
import Esentry from "./components/Esentry"
import ReadApp from "./components/ReadApp"
import SortVisualizer from "./components/SortVisualizer"
import "./index.css"
import Medicomm from "./components/Medicomm"
import CampConnection from "./components/CampConnection"
export const ProjectCount: Array<number> = [1, 1, 1, 1, 1, 1]
const DELAY = 40 // seconds
const Projects = () => {
    const [index, setIndex] = useState(0)
    const ProjectsList: Array<JSX.Element> = [<CampConnection index={index} setIndex={setIndex} />, <Medicomm index={index} setIndex={setIndex} />, <ReadApp setIndex={setIndex} index={index} />, <Esentry setIndex={setIndex} index={index} />, <Corni setIndex={setIndex} index={index} />, <SortVisualizer setIndex={setIndex} index={index} />]
    useEffect(() => {
        const ticker = setInterval(() => {
            setIndex(prev => prev >= ProjectCount.length - 1 ? 0 : prev + 1)
        }, 1000 * DELAY)
        return () => clearInterval(ticker);
    }, []);
    return (
        <section id="projects">
            <div>{ProjectsList[index]}</div>
            <div className="gap-30" />
        </section>
    )
}


export default Projects