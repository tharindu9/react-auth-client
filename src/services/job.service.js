import axios from "axios";

const API_URL = "http://localhost:8081/api/job/";

class JobService {
  create(job) {
    return axios
      .post(API_URL + "insert", job)
      .then((response) => {
        return response.data;
      });
  }

  getAll() {
    return axios.get(API_URL + "get/all")
    .then(response => {
      return response.data
    })
    .catch (err => {
      return err;
    })
  }
}

export default new JobService();