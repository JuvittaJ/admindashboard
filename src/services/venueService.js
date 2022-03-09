import axios from "axios";
const VENUE_BASE_REST_API_URL = "http://localhost:8080/api/v1/venues";
class venueService {
  getAllVenues() {
    return axios.get(VENUE_BASE_REST_API_URL);
  }
  createVenue(venue) {
    return axios.post(VENUE_BASE_REST_API_URL, venue);
  }
  getVenueById(venueId) {
    return axios.get(VENUE_BASE_REST_API_URL + "/" + venueId);
  }
  updateVenue(venueId, venue) {
    return axios.put(VENUE_BASE_REST_API_URL + "/" + venueId, venue);
  }
  deleteVenue(venueId) {
    return axios.delete(VENUE_BASE_REST_API_URL + "/" + venueId);
  }
}
export default new venueService();
