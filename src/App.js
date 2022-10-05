import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom'
import Projects from './components/Projects';
import Services from './components/Services'
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact'
import Error from './components/Error';
import CollapsibleExample from './components/CollapsibleExample';
import Dna from './components/Spinner';
import './components/style.css'
function App() {
  
  const state = document.readyState;
  console.log(document.readyState);
  const [isLoading, setLoading] = useState(state );
  console.log(isLoading);
  useEffect(()=>{
    setLoading(state == 'complete')
    setTimeout(()=>{
      setLoading(state == ' interactive')
    }, 2000)
  },[])
  return (
   <>
   <CollapsibleExample/>
    {
      isLoading ? (
      <Dna  isLoading={isLoading} id='spinner'/>)
      :
      (
   <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/home' component={Home}/>
    <Route  excat path='/projects' component={Projects}/>
    <Route  excat path='/services' component={Services}/>
    <Route  excat path='/Resume' component={Resume}/>
    <Route  excat path='/about' component={About}/>
    <Route  excat path='/contact' component={Contact}/>
    <Route  component={Error}/>
   </Switch>
      )
    }
   
   {/* <Home/> */}
   
   </>
  );
}

export default App;
