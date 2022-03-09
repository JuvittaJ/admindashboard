import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import venueService from "../services/venueService";

const AddVenue = () => {
  const [venueName, setVenueName] = useState("");
  const [venueImageURL, setVenueImageURL] = useState("");
  const [venueLocation, setVenueLocation] = useState("");
  const [venueCapacity, setVenueCapacity] = useState("");
  const [venueDescription, setVenueDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const addVenue = (e) => {
    e.preventDefault();

    const venue = {
      venueName,
      venueImageURL,
      venueLocation,
      venueCapacity,
      venueDescription,
    };
    venueService
      .createVenue(venue)
      .then((response) => {
        console.log(response.data);

        navigate("/Venues");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form className="mt-5 pt-5">
        <div className="container mt-3">
          <div className="row d-flex flex-wrap ">
            <div className="col-lg-6">
              <div controlId="formName" className="form-group mb-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter Venue name"
                  name="venueName"
                  value={venueName}
                  onChange={(e) => setVenueName(e.target.value)}
                />
              </div>

              <div controlId="formName" className="form-group mb-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter the venue Image url"
                  name="venueImageURL"
                  value={venueImageURL}
                  onChange={(e) => setVenueImageURL(e.target.value)}
                />
              </div>

              <div controlId="formName" className="form-group mb-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter Venue Location"
                  name="venueLocation"
                  value={venueLocation}
                  onChange={(e) => setVenueLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div controlId="formName" className="form-group mb-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter the capacity of the venue"
                  name="venueCapacity"
                  value={venueCapacity}
                  onChange={(e) => setVenueCapacity(e.target.value)}
                />
              </div>
              <div controlId="formName" className="form-group mb-3">
                <textarea
                  class="form-control"
                  rows="4"
                  placeholder="Enter venue description"
                  name="venueDescription"
                  value={venueDescription}
                  onChange={(e) => setVenueDescription(e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={(e) => addVenue(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddVenue;
