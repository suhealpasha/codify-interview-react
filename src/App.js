import React, { Component } from 'react';
import CallWidget from "./Components/CallWidget/CallWidget";
import './App.css';

class App extends Component{
constructor(props){
  super(props);
  this.state={

  }
}
render(){
  return(
  <div><p>Codify React Test Interview.</p>
  <CallWidget />
  </div>)
}

}


export default App;
