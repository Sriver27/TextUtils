import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); // wether dark mode is enabled or not
  const [alert,setAlert] = useState(null);


  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
          setAlert(null);
      },1000)
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
  <>
  <Router>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Switch>
          <Route exact path="/about" >
            <About />
          </Route>
       
          <Route exact path="/" >
          <TextForm showAlert = {showAlert} heading="Enter text below to utilize the utilities " mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    
    
   
   
  </>
  );
}

export default App;
