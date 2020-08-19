import {
  MAKE_REQUEST,
  ERROR,
  GET_JOBS,
  UPDATE_NEXT_PAGE,

} from '../types';


export default (state,action) =>{
    switch(action.type){

        case MAKE_REQUEST:
            return {
                loading:true,
                jobs:[]
            };
        case GET_JOBS:
            return {
                ...state,
                loading:false,
                jobs: action.payload.jobs
            }

        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                jobs: []
            }
        case UPDATE_NEXT_PAGE:
            return {
                ...state,
                hasNextPage: action.payload.hasNextPage
            }


        default: 
        return state;
    }
}