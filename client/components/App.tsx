import GetProjects from '../../client/components/GetProjects'
import {AddProjectForm} from '../../client/components/AddProjectForm'


function App() {
  return (
    <div>
      <header className="App-header">
      <h1>Portfolio</h1>
      </header>
      <section className="App-body">
        <GetProjects />
        <AddProjectForm />
      </section>

    </div>
  )
}

export default App
