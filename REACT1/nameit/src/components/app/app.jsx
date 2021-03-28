import React from 'react';
import ResultCont from '../ResultContainer/ResultCont';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../header/header';

import './app.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

  state= {
    headerText :"Name It!",
    headExp:true,
    sugName:[],
  };

  handleInputChange =(ipText) =>{
  
  this.setState({
    headExp: ipText.length > 0 ? false :true ,
    sugName:name(ipText),
  });
  //console.log('IP TXT-',ipText);
};

  render() {
    //console.log(name('cloud'));

    return(
      <div>
        <Header headExp={this.state.headExp} headTitle={this.state.headerText}/>
        <SearchBox oninputChange={this.handleInputChange} />
        <ResultCont sugName={this.state.sugName} />
      </div>
    )
  }
}

//function App()
//{
//  return <h1>This is functional comp</h1> //functional com
//}

export default App