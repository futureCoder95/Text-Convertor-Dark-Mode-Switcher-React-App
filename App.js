import About from './About';
import Navbar from "./Navbar";
import Textarea from './Textarea';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  const [mode, setMode] = useState('light');

  // This function is for the Enable dark mode button in the Navbar where you can toggle the mode b/w Light & Dark---->//
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#322f54"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
  }



  return (
    <>
      <Router>
        <Navbar title="Text-Convertor" home="Home" about="About" mode={mode} toggleMode={toggleMode} />

        <div className="container my-3">

          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Textarea heading="Text-Convertor | Word Counter | Word Converter" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  )
}
