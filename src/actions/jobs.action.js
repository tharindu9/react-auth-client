import {
    SET_MESSAGE,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_FAIL
  } from "./types";
  
  import JobsService from "../services/job.service";
  
  export const createJob = (data) => (dispatch) => {
    console.log("action ")
    return JobsService.create(data).then(
      (response) => {
        console.log("response ::: ", response)
        dispatch({
          type: CREATE_JOB_SUCCESS,
          payload: response,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: CREATE_JOB_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };