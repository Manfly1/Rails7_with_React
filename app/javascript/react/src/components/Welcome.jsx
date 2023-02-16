import React from "react"
import ReactDOM from "react-dom"
import QuestionList from "./QuestionList"

  const Welcome = () => {
    return(
      <div className="container">
        <h1>Rails 7 with React</h1>
        <QuestionList />
      </div>
    )
  }

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Welcome />, document.getElementById('welcome'))
})

export default Welcome
