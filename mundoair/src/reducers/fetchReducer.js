import {FETCH_DATA_PENDING,FETCH_DATA_ERROR,FETCH_DATA_SUCCESS} from '../actions/fetchActions.js';

const initialState={
pending:false,
data:[],
error:null
}

const fetchReducer=(state=initialState,action)=>
{
	switch(action.type)
	{
	case FETCH_DATA_PENDING:
		return {...state,pending:true}
	case FETCH_DATA_ERROR:
		return {...state,pending:false,error:action.error}

	case FETCH_DATA_SUCCESS:
	console.log("Payload",action.payload);
		return {...state,pending:false,data:action.payload}
	default:
	return state;

	}

}



export const getData=state=>state.data;
export const getDataPending=state=>state.pending;
export const getDataError=state=>state.error;

export default fetchReducer;
