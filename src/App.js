
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let [mode, setMode] = useState('light');//whether dark mode is enabled or not
  
   const [alert, setAlert] = useState(null)

   const showAlert = (message,type) =>{
     setAlert({
       msg:message,
       type:type
     })
     setTimeout(() => {
       setAlert(null);
     }, 3000);

   }

   const toggleMode = () =>{
     if(mode ==='light'){
       setMode('dark')
       document.body.style.backgroundColor ='#042743';
       showAlert("Dark Mode has been enabled","success");
       document.title='TextUtils-Dark Mode';
      //  setInterval(() => {
      //   document.title='TextUtils is amazing';
      //  },2000);
      //  setInterval(() => {
      //   document.title=' Download TextUtils Now';
      //  },1500);
     }
     else{
       setMode('light')
       document.body.style.backgroundColor ='white';
       showAlert("Light Mode has been enabled","success");
       document.title='TextUtils-Light Mode';
     }
   }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
        <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>
        </Route>
    </Switch>
    </div>
     </Router> 
    </>
  );
}

export default App;
