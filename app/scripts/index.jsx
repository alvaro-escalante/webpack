import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { getId } from './components/functions'

const App = () => {
  const [author, setAuthor] = useState('')

  useEffect(() => {
    setTimeout(() => setAuthor('By Alvaro Fernandez-Escalante Naves'), 1000)
  }, [])

  return (
    <main>
      <div class='row align-center'>
        <div class='col-xs-12'>
          <h1>React webpack</h1>
          <p class='here'></p>
          <h4>JavaScript ES6, SCSS, Webpack.</h4>
          <h6>
            <span class='social icon-facebook'></span>
            {author}
          </h6>
        </div>
      </div>
    </main>
  )
}

export default App

ReactDOM.render(<App />, getId('root'))

if (module.hot) {
  module.hot.accept()
}
