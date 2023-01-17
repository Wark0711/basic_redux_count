import './App.css'
import { useState, useEffect } from "react";
import { connect } from "react-redux";
function App(props) {
  console.log(props)
  const handleInc = (e) => {
    props.dispatch({
      type: 'INCREMENT'
    })
  }

  const handleDec = (e) => {
    props.dispatch({
      type: 'DECREMENT'
    })
  }

  return (
    <div className="App">
      <div><button onClick={handleInc}>+</button></div>
      <div>{props.count}</div>
      <div><button onClick={handleDec}>-</button></div>
    </div>
  )
}

const mapStateToProps = (state => {
  return {
    count: state.count
  }
})

export default connect(mapStateToProps)(App)
