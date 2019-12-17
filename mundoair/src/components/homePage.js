import React from 'react';
import Itinerary from './itinerary.js'
import StackGrid from "react-stack-grid";

import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import fetchDataSuccess from '../actions/fetchActions.js'
import setCurrentDeal from '../actions/setDealActions.js'

let url="https://everymundointernship.herokuapp.com/popularRoutes/JK71FE13EU98"


class HomePage extends React.Component
{


	constructor(props)
	{
	super(props);
	console.log("Props",props)
	this.getAPIData=this.getAPIData.bind(this);

	this.getAPIData()
}
getAPIData(){
	fetch(url)
	.then(res=>res.json())
	.then(res=>
		{
			console.log("Response is ",res)
			this.props.fetchURL(res)
		})
	.catch((error)=>{
		console.log(error)
	}
	)
}

	render()
	{
		console.log("Props",this.props.results.data)
		const stackItems=this.props.results.data.map((data,index)=>
				<div key={index}> <Itinerary routeCoverImage={data.routeCoverImage} origin={data.origin}
				destination={data.destination} departureDate={data.departureDate} returnDate={data.returnDate}
				priceUSD={data.priceUSD} fareClass={data.fareClass} browserRoute={this.props.history} updateState={this.props.setCurrentDeal} triptype={data.tripType}/>
				</div>
	);
		return(
			<StackGrid columnWidth={350}>
				{stackItems}
			</StackGrid>
		);

	}


}

const mapStateToProps=(state)=>{
	return {results:state}
}

const mapDispatchToProps=(dispatch)=>({
fetchURL:(data)=>dispatch(fetchDataSuccess(data)),
setCurrentDeal:(data)=>dispatch(setCurrentDeal(data))


})



export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
