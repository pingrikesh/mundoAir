import React from 'react'
import Card from '@material-ui/core/Card';
class Content extends React.Component
{
  constructor(props)
  {
    super(props)
    //console.log("Content Data ",props.data);
    this.handleClick=this.handleClick.bind(this);

  }
   handleClick(e)
  {
    e.preventDefault();
    alert('Redirected......');
  }


  render()
  {

    return(
      <div>
      <Card>
      <h3>Departs:{this.props.data.departureTime},
      Arrives:{this.props.data.arrivalTime},
      Price:$ {this.props.data.priceUSD}</h3>
      <button onClick={this.handleClick}> Buy </button>
      </Card>
      </div>

    );
  }
}

export default Content;
