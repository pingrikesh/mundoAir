import React from 'react';
import Header from './header.js'

class ResultPage extends React.Component
{
  constructor(props){
  super(props)
//  console.log("Hello Result Page ",props)
  }

  render(){
    const resultlist=this.props.location.state.result.map((data,index)=>
      <div key={index}> <Header data={data}/></div>
    )
    return(
      <li>
      {resultlist}

      </li>
    )
  }
}
export default ResultPage
