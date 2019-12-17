import React from 'react'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Content from './content.js'

class Header extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  render()
  {
    const resultList=this.props.data.routes.map((data,index)=>
      <div key={index}><Content data={data}/></div>
    )



    return(

<div>
<Card>
<div> <h1>Origin: {this.props.data.origin},Destination:{this.props.data.destination}, Departure:{this.props.data.departureDate}</h1></div>
</Card>

<li>
{resultList}
</li>
</div>

    );

  }
}

export default Header;
