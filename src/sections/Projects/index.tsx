import { useEffect, useState } from "react"
import Corni from "./components/Corni"
import Esentry from "./components/Esentry"
import ReadApp from "./components/ReadApp"
import SortVisualizer from "./components/SortVisualizer"
import "./index.css"
const DELAY = 30 // seconds
const Projects = () => {
    const [index, setIndex] = useState(0)
    const Projects: Array<JSX.Element> = [<Corni setIndex={setIndex} index={index} />, <ReadApp setIndex={setIndex} index={index} />, <Esentry setIndex={setIndex} index={index} />, <SortVisualizer setIndex={setIndex} index={index} />]
    useEffect(() => {
        const ticker = setInterval(() => {
            setIndex(prev => prev >= Projects.length - 1 ? 0 : prev + 1)
        }, 1000 * DELAY)
        return () => clearInterval(ticker);
    }, []);
    return (
        <section id="projects">
            <div>{Projects[index]}</div>
            <div className="gap-30" />
        </section>
    )
}


export default Projects