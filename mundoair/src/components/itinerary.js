import React from 'react';
import Image from 'react-image-resizer';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

class Itinerary extends React.Component
{
	constructor(props)
	{
		super(props);
		this.handleOnClick=this.handleOnClick.bind(this);
	}
	handleOnClick()
	{
	//	this.props.updateState()
		this.props.browserRoute.push('/info',{origin:this.props.origin,destination:this.props.destination,departure:this.props.departureDate,returnDate:this.props.returnDate,
		priceUSD:this.props.priceUSD,fareClass:this.props.fareClass,tripType:this.props.triptype})
	}


	render()
	{
		return (

			<Grid spacing={150}>
			<Card spacing={100}>
				<div>	<label><Image src={this.props.routeCoverImage} width={350} height={300}/></label></div>
				<div><label>	<h1>From:	{this.props.origin}	to	{this.props.destination}</h1>
					<h4>Departs:	{this.props.departureDate}</h4>	<h4>	Return:	{this.props.returnDate}</h4></label>
					</div>
					<div><label>
						<h2 alignment='right'>Fare From:$ {this.props.priceUSD}</h2>
						<h2 alignment='left'> Class:	{this.props.fareClass}</h2></label></div>
						</Card>
				<div>
					<button onClick={this.handleOnClick}>View Deal</button>
				</div>
				</Grid>
				)
	}
}


export default Itinerary
