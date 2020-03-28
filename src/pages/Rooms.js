import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";

export default class Rooms extends Component {
  render() {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </Banner>
        </Hero>
        <RoomContainer />
      </>
    );
  }
}
