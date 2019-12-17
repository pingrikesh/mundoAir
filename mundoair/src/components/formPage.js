import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import fetchDataSuccess from '../actions/fetchActions.js'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';


let searchurl="https://everymundointernship.herokuapp.com/search/JK71FE13EU98"

class Form extends React.Component
{




	constructor(props)
	{
	super(props);
	//console.log("Type",props.location.state.tripType);

	let departs=props.location.state.departure;
	let returns=props.location.state.returnDate;
	let newDeparts='';
	let newReturns='';
	departs=departs.split("/");
	if(departs[0].length!=2)
	{
		 newDeparts=departs[2]+"-0"+departs[0]+"-"+departs[1];
	}
	else {
		  newDeparts=departs[2]+"-"+departs[0]+"-"+departs[1];
	}

	returns=returns.split("/");

	if(departs[0].length!=2)
	{
		 newReturns=returns[2]+"-0"+returns[0]+"-"+returns[1];
	}
	else {
		  newReturns=returns[2]+"-"+returns[0]+"-"+returns[1];
	}

//console.log(newfrom)
	this.state={
		type:props.location.state.tripType,
		origin:props.location.state.origin,
		destination:props.location.state.destination,
		departs:newDeparts,
		returns:newReturns,
		passengers:1 ,
		promo:''
	};


	this.handleSubmit=this.handleSubmit.bind(this);
	this.handleType=this.handleType.bind(this);
	this.handleOrigin=this.handleOrigin.bind(this);
	this.handleDestination=this.handleDestination.bind(this);
	this.handleDepart=this.handleDepart.bind(this);
	this.handleReturn=this.handleReturn.bind(this);
	this.handlePassenger=this.handlePassenger.bind(this);
	this.handlePromo=this.handlePromo.bind(this);
	//this.props.fetchURL("https://everymundointernship.herokuapp.com/popularRoutes/JK71FE13EU98");
	}


	handleSubmit(){

console.log("Posting POST Request ")
		let data={tripType:this.state.type,destination:this.state.destination,origin:this.state.origin,departureDate:this.state.departs,
			returnDate:this.state.returns,passengerCount:this.state.passengers,promo:this.state.promo}
			fetch(searchurl,
				{
				method:"POST",
				credentials: "same-origin", // include, *same-origin, omit
					headers: {
							"Content-Type": "application/json",
							// "Content-Type": "application/x-www-form-urlencoded",
					},
					body:JSON.stringify(data)
			}).then(response =>response.json())
			.then(finalresult =>this.props.history.push("/results",{result:finalresult}));



		}




	handleType=(event)=>{
	this.setState({type:event.target.value})
	}

	handleOrigin=(event)=>{
	this.setState({origin:event.target.value})
	}
	handleDestination=(event)=>{
	this.setState({destination:event.target.value})
	}
	handleDepart=(event)=>{
	console.log(this.state.departs);
	this.setState({departs:event.target.value})

	}
	handleReturn=(event)=>{
	this.setState({returns:event.target.value})
	}
	handlePassenger=(event)=>{
	this.setState({passengers:event.target.value})
	}
	handlePromo=(event)=>{
	this.setState({promo:event.target.value})
	}



	render()
	{

		return (

		<Card>

			<div>
			<label> OneWay: <input type="radio" value="oneWay" checked={this.state.type==="oneWay"?true:false} onChange={this.handleType}/></label>
			<label> RoundTrip: <input type="radio" value="roundTrip" checked={this.state.type==="roundTrip"?true:false} onChange={this.handleType} /></label>
			</div>
			<div>
			<label> Origin: <input type="text" value={this.state.origin} onChange={this.handleOrigin}/></label>
			<label> Destination: <input type="text" value={this.state.destination} onChange={this.handleDestination}/></label>
			</div>
			<div>
			<label> Departs: <input type="date" value={this.state.departs} onChange={this.handleDepart}/></label>
			<label> Return: <input type="date" value={this.state.returns} onChange={this.handleReturn} /></label>
			</div>
			<div>
			<label> Passenger(s): <input type="number" min={1} defaultValue={1} onChange={this.handlePassenger}/></label>
			<label> Promo Code: <input type="text" placeholder={'If applicable.'} onChange={this.handlePromo} /></label>
			</div>
			<div>
				<button onClick={this.handleSubmit}>Search Flight </button>
			</div>

		</Card>

		);
	}

}

const mapStateToProps=(state)=>{return {currentDealReducer:state.currentDealReducer}}

const mapDispatchToProps=(dispatch)=>({
fetchURL:(data)=>dispatch(fetchDataSuccess(data))
})



export default connect(mapStateToProps,mapDispatchToProps)(Form);
