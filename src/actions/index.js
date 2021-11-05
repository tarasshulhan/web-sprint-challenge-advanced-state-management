import axios from 'axios';

export const fetchSmurfs = ()=> {
    return (dispatch) => {
        dispatch(fetchStart());

        axios.get(`http://localhost:3333/smurfs`)
          .then(resp=> {
            dispatch(fetchSuccess(resp.data));
        })
        .catch(err => {
            dispatch(fetchError(err));
        });
    }
}

export const FETCH_START = "FETCH_START";
export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (smurf)=> {
    return({type: FETCH_SUCCESS, payload:smurf});
}

export const FETCH_ERROR = "FETCH_ERROR";
export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}

export const ADD_SMURF = "ADD_SMURF";
export const addSmurf = (smurf)=>{
    return({type: ADD_SMURF, payload:smurf});
}

export const SET_ERROR = "SET_ERROR";
export const setError = (errorMessage)=> {
    return({type: SET_ERROR, payload:errorMessage});
}