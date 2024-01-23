import './App.css'

function App() {
  return (
    <>
      <div className="profileImg">

      </div>
      <div className="profileInfo">
        <h1 className="name">Laura Smith</h1>
        <h3 className="proffession">Frontend Developer</h3>
        <p className="website">laurap.website</p>
      </div>
      <div className="socialLinks">
        <button className="btn emailBtn"><i className="fa-solid fa-envelope"></i> Email</button>
        <button className="btn linkedinBtn"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
      </div>
    </>
  )
}

export default App
