import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() {
  function Click1() {
    alert('Click-1 button is clicked');
  }
  function Add5(num) {
    alert(num + 5);
  }
  return (
    <>
      <h1>React Concepts</h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      {/* <button onClick={Click1}>Click 1</button>
      <button onClick={function () {
        alert("Click-2 button clicked");
      }}>Click 2</button>
      <button onClick={() => alert("Click-3 button is clicked")}>Click 3</button>
      <button onClick={() => Add5(7)}>Add 5</button> */}
    </>
  )
}

export default App
