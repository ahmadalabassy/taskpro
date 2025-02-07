import { Link } from "react-router"

export default function Aside() {
  return (
    <aside>
      <Link to="/"><p>TASKPRO</p></Link>
      <section>
        <Link to="/"><p>Home</p></Link>
        <Link to="/tasks"><p>Tasks</p></Link>
        <Link to="/drive"><p>Drive</p></Link>
        <Link to="/progress"><p>Progress</p></Link>
        <Link to="/team-members"><p>Team Memebers</p></Link>
        <Link to="/messages"><p>Messages</p></Link>
      </section>
      <section>
        <p>Workspace</p>
        <ul>
          <li>Product Design</li>
          <li>UI/UX Design</li>
          <li>Web App Development</li>
          <li>Mobile App Development</li>
        </ul>
      </section>
      <button>+ Create Task</button>
    </aside>
  )
}