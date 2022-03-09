import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate, useParams } from "react-router-dom";
import refereeService from "../services/refereeService";

import "./Card.css";

const AddReferee = () => {
  const [referees, setReferees] = useState([]);

  useEffect(() => {
    getAllReferees();
  }, []);
  const getAllReferees = () => {
    refereeService
      .getAllReferees()
      .then((response) => {
        setReferees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteReferees = (id) => {
    refereeService
      .deleteReferee(id)
      .then((response) => {
        getAllReferees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [refereeName, setRefereeName] = useState("");
  const [noOfMatches, setNoOfMatches] = useState("");
  const [refereeLocation, setRefereeLocation] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const addReferee = (e) => {
    e.preventDefault();
    const referee = { refereeName, noOfMatches, refereeLocation };
    refereeService
      .createReferee(referee)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
        navigate("/AddReferee");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="mt-5 pt-3">
        <div className="container mt-5">
          <div className="row d-flex flex-wrap-reverse ">
            <div className="col-lg-8 d-flex ">
              <div className="d-flex flex-wrap ">
                {referees.map((referee) => (
                  <div className="card-referee " key={referee.refereeID}>
                    <img
                      className="referee_Img"
                      src={referee.refereeLocation}
                    />

                    <h6 className="text-wrap">{referee.refereeName}</h6>
                    <p className="text-wrap">Place: {referee.noOfMatches}</p>

                    <div className="row">
                      <div className="col-7"></div>
                      <div className="col-2">
                        <a href={"/EditReferee/" + referee.refereeID}>
                          <img
                            className="edit"
                            src="https://i.ibb.co/02TZY8g/edit.png"
                          />
                        </a>{" "}
                      </div>
                      <div className="col-2">
                        {" "}
                        <img
                          className="delete"
                          src="https://i.ibb.co/PQ8gKz6/delete.png"
                          onClick={() => deleteReferees(referee.refereeID)}
                        />{" "}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <form>
                <h6 style={{ textAlign: "center" }}>Add Referee details</h6>

                <div controlId="formName" className="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter referee Name"
                    name="refereeName"
                    value={refereeName}
                    onChange={(e) => setRefereeName(e.target.value)}
                  />
                </div>

                <div controlId="formName" className="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter match experience in numbers"
                    name="noOfMatches"
                    value={noOfMatches}
                    onChange={(e) => setNoOfMatches(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3" controlId="formName">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter match Referee Location"
                    name="refereeLocation"
                    value={refereeLocation}
                    onChange={(e) => setRefereeLocation(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={(e) => addReferee(e)}
                >
                  Add Referee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReferee;
