import axios from "axios";
const REFEREE_BASE_REST_API_URL = "http://localhost:8080/api/v1/referees";
class refereeService {
  getAllReferees() {
    return axios.get(REFEREE_BASE_REST_API_URL);
  }
  createReferee(referee) {
    return axios.post(REFEREE_BASE_REST_API_URL, referee);
  }
  getRefereeById(refereeID) {
    return axios.get(REFEREE_BASE_REST_API_URL + "/" + refereeID);
  }
  updateReferee(refereeID, referee) {
    return axios.put(REFEREE_BASE_REST_API_URL + "/" + refereeID, referee);
  }
  deleteReferee(refereeID) {
    return axios.delete(REFEREE_BASE_REST_API_URL + "/" + refereeID);
  }
}
export default new refereeService();
