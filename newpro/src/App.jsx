import Myimg from './image.png'
import './app.css'
function App() {
  let name = "Ramesh"
  let age = 99
  let st = {
    color: "yellow",
    backgroundColor: "black",
    padding: "20px"

  }
  return (
    <>
      <nav className='nav'>
        <div className="logo">LOGO</div>
        <ul className='ul'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Login</li>
          <li>Contact</li>
          <li>Login</li>
          <li>Contact</li>
        </ul>
      </nav>
      <h1>Welcome to react class</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corrupti vero laborum, odit, aut illum eum, quos eaque ad autem iure hic sunt incidunt necessitatibus reiciendis quam eligendi sequi.</p>
      <img src={Myimg} alt="" height="300px" />
      <h1 style={{ backgroundColor: "red", color: "white" }}> His Name is {name}</h1>
      <h1 style={{ color: "red" }}>Age:{age}</h1 >
      <marquee behavior="" direction=""><h1 style={st}>HEloo...</h1></marquee>
      <h1 className='ex'>Externel css applied</h1>
      <button>click</button>
    </>
  )
}

export default App
