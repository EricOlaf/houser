import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    houses: []
  };
  componentDidMount() {
    axios.get("/api/houses").then(response => {
      console.log(response.data);
    });
  }
  render() {
    return (
      <div>
        <Link to="/wizard">
          <button className="btn">Add New Property</button>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
