import * as React from "react"
import * as ReactDOM from "react-dom"

  const Home = () => {
    return(
      <div className="container">
        <h1>Rails 7 with React</h1>
      </div>
    )
  }

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Home />, document.getElementById('home'))
})

export default Home
