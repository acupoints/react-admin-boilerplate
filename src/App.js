import React, { Component } from 'react';
import {render} from 'react-dom';
import Button from 'antd/lib/button'
import 'antd/dist/antd.css'
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render(){
//     let isDisabled = false
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <Button type="dashed" disabled={isDisabled}>Dashed(disabled)</Button>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor () {
    super()
    this.state = {
      apiResponse: "",
    }
  }

  callAPI () {
    fetch("/api/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err)
  }
  componentDidMount () {
    this.callAPI()
  }
  render () {
    let isDisabled = false
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <p className="App-intro">{this.state.apiResponse}</p>
      <Button type="dashed" disabled={isDisabled}>Dashed(disabled)</Button>
      </div>
    )
  }

}

render(<App />, document.getElementById('root'));
