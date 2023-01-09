import React from 'react'
import './App.css'
import './First.css'
import './Second.css'
import './Third.css'
import './Fourth.css'
import Navbar from './components/Navbar'
import Firstcomp from './components/Firstcomp'
import Secondcomp from './components/Secondcomp'
import Thirdcomp from './components/Thirdcomp'
import Fourthcomp from './components/Fourthcomp'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Firstcomp />
      <Secondcomp />
      <Thirdcomp />
      <Fourthcomp />
    </div>
  )
}

export default App
