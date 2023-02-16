import React from "react"
import ReactDOM from "react-dom"

const QuestionList = () => {
  const questionsList = [
    {
      title: 'Key present in a Hash?',
      tag: 'Ruby'
    },
    {
      title: 'Difference between strings and symbol',
      tag: 'Ruby'
    },
    {
      title: 'two same keys in Hash?',
      tag: 'Ruby'
    },
    {
      title: 'delete key from?',
      tag: 'Ruby'
    }
  ]
  return(
    <div className="row">
      <div className="col-lg-10 mx-auto">
        {questionsList.map((question) => 
          <div className="card rounded-0 mt-3">
            <div className="card-body">
              <h3 className="card-title">{question.title}</h3>
              <p className="lead">
                <span className="badge bg-primary">{question.tag}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionList
