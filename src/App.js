import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";

import Venues from "./components/Venues";
import Logout from "./components/Logout";
import AddVenue from "./components/AddVenue";
import AddTeam from "./components/AddTeam";
import AddReferee from "./components/AddReferee";
import EditVenue from "./components/EditVenue";
import EditReferee from "./components/EditReferee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Teams from "./components/Teams";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Venues" element={<Venues />} />
          <Route exact path="/Teams" element={<Teams />} />
          <Route exact path="/Logout" element={<Logout />} />
          <Route exact path="/AddVenue" element={<AddVenue />} />
          <Route exact path="/AddTeam" element={<AddTeam />} />
          <Route exact path="/AddReferee" element={<AddReferee />} />
          <Route exact path="/EditVenue/:id" element={<EditVenue />} />
          <Route exact path="/EditReferee/:id" element={<EditReferee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
