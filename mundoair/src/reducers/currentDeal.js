let SET_CURRENT_STATE="SET_CURRENT_STATE"
const initialState={
  type:' ',origin:'',destination:' ',departs:' ',returns:' ',passengers:1 ,promo:''
}


const currentDealReducer=(state=initialState,action)=>
{
  switch(action.type)
	{
    case "SET_CURRENT_STATE":
    console.log("Setting Current State ");
      return {...state,type:action.payload.type,origin:action.payload.origin,destination:action.payload.destination,departs:action.payload.departs,
    returns:action.payload.returns,passengers:action.payload.passengers,promo:action.payload.promo}
    default:
  	return state;

  }

}

export default currentDealReducer;
