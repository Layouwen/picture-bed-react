import React from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import History from './pages/History'
import About from './pages/About'

function App() {
  return (
    <div className="app">
      <Header/>
        <Switch>
          {/*<Route path="/" exact>*/}
          {/*  <Home/>*/}
          {/*</Route>*/}
          <Route path="/" exact component={Home}/>
          <Route path="/history" exact component={History}/>
          <Route path="/about" exact component={About}/>
        </Switch>
      <Footer/>
    </div>
  )
}

export default App
