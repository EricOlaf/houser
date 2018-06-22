import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

class Wizard extends Component {
  state = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: 0
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { name, address, city, state, zip } = this.state;
    if (name && address && city && state && zip) {
      axios
        .post("/api/houses", {
          name,
          address,
          city,
          state,
          zip
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(response => {
          console.log(response);
        });
    }
  };

  render() {
    return (
      <div>
        <Link to="/">
          <button className="btn">Cancel</button>
        </Link>
        <form onSubmit={this.onSubmitHandler}>
          <input
            value={this.state.name}
            onChange={this.onChangeHandler}
            name="name"
            placeholder="name"
            type="text"
          />
          <input
            value={this.state.address}
            onChange={this.onChangeHandler}
            name="address"
            placeholder="address"
            type="text"
          />
          <input
            value={this.state.city}
            onChange={this.onChangeHandler}
            name="city"
            placeholder="city"
            type="text"
          />
          <input
            value={this.state.state}
            onChange={this.onChangeHandler}
            name="state"
            placeholder="state"
            type="text"
          />
          <input
            value={this.state.zip}
            onChange={this.onChangeHandler}
            name="zip"
            placeholder="zipcode"
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default Wizard;
