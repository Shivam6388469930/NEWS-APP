
import React, { Component, useState } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  
  state={
    progress:10
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {

    return (
      <>
      {/* creating routes */}
        <Router>
          <Navbar />
          {/* adding top loading bar */}
          <LoadingBar color="#f11946" progress={ this.state.progress } />
          
          <Routes>
            <Route path='/' element={ <News setProgress={this.setProgress}  pagesize="6" categry="General" key="home" /> } ></Route>
            <Route path='/business' element={ <News setProgress={this.setProgress}  pagesize="6" categry="Business" key="business" /> }></Route>
            <Route path='/entertainment' element={ <News setProgress={this.setProgress}  pagesize="6" categry="Entertainment" key="enteraintment" /> }></Route>
            <Route path='/sports' element={ <News setProgress={this.setProgress}  pagesize="6" categry="Sports" key="sports" /> }></Route>
            <Route path='/health' element={ <News setProgress={this.setProgress}  pagesize="6" categry="Health" key="health" /> }></Route>
            <Route path='/science' element={ <News setProgress={this.setProgress}  pagesize="6" categry="Science" key="science" /> }></Route>
            <Route path='/technology' element={ <News setProgress={this.setProgress}  pagesize="6" categry="Technology" key="technology" /> }></Route>
            <Route path='/general' element={ <News setProgress={this.setProgress}  pagesize="6" categry="General" key="general" /> }></Route>
          </Routes>
        </Router>



      </>
    )
  }
}
