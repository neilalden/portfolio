import './App.css'
import About from './sections/About/index'
import Projects from './sections/Projects/index'

function App() {

  return (
    <main id="root">
      <About />
      <div className="gap-60" />
      <Projects />
    </main>
  )
}

export default App
