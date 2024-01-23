import './App.css'

function Body() {
  return (
    <>
      <div className="containers about">
        <h1 className="aboutHeader">About</h1>
        <p className="description">
        I am a frontend developer with a particular interest in making
         things simple and automating daily tasks.
         I try to keep up with security and best practices, and am always 
         looking for new things to learn.
        </p>
      </div>
      <div className="containers interests">
        <h1 className="interestsHeader">Interests</h1>
        <p className="description">
        Food expert. Music scholar. Reader. Internet fanatic.
         Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. 
         Coffee fanatic.
        </p>
      </div>
    </>
  )
}

export default Body