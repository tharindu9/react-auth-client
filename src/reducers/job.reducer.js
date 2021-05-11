import {
    SET_MESSAGE,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAIL
  } from "../actions/types";
    
  const initialState = {};

  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_JOB_SUCCESS:
       console.log("reducer :",payload)
        return {
          ...state,
        };
      case CREATE_JOB_FAIL:
        return {
          ...state,
        };
      default:
        return state;
    }
  }