import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import venueService from "../services/venueService";
import "bootstrap/dist/css/bootstrap.css";

const Venues = () => {
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    getAllVenues();
  }, []);
  const getAllVenues = () => {
    venueService
      .getAllVenues()
      .then((response) => {
        setVenues(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteVenue = (id) => {
    venueService
      .deleteVenue(id)
      .then((response) => {
        getAllVenues();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container">
        <div className="d-flex mx-3 mt-5">
          <div className="d-flex flex-wrap justify-content-start">
            {venues.map((venue) => (
              <div className="card-venue " key={venue.venueId}>
                <img className="stadium_Img" src={venue.venueImageURL} />
                <div className="row pt-2 ">
                  <div className="col-8">
                    <h6 className="text-wrap">{venue.venueName}</h6>
                  </div>
                  <div className="col-4 ">
                    <img
                      className="rating_Img"
                      src="https://i.ibb.co/27WSNxr/istockphoto-1169299469-170667a.jpg"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-9">
                    <p className="text-wrap">Place: {venue.venueLocation}</p>
                  </div>
                  <div className="col-1">
                    <a href={"/EditVenue/" + venue.venueId}>
                      <img
                        className="edit"
                        src="https://i.ibb.co/02TZY8g/edit.png"
                      />
                    </a>
                  </div>
                  <div className="col-1">
                    <img
                      className="delete"
                      src="https://i.ibb.co/PQ8gKz6/delete.png"
                      onClick={() => deleteVenue(venue.venueId)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container pb-5 mb-5">
          <Link to="/AddVenue">
            <button className="btn btn-primary pull-right mr-5">
              Add Venue
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Venues;
