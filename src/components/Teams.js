import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

export default function Venues() {
  return (
    <>
      <Button variant="secondary">
        {" "}
        <Link to="/AddTeam">Click</Link>{" "}
      </Button>
    </>
  );
}
