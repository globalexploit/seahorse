import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title.js";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "no hidden charges",
        info:
          "Yes, there is no hidden charges or extra charges, no agent fee or commision fee."
      },
      {
        icon: <FaHiking />,
        title: "free consultant",
        info:
          "Your comfortability and satisfaction is our pride, professional consultant will be attending to various need and questions.",
      },
      {
        icon: <FaShuttleVan />,
        title: "easy UI",
        info:
          "Our website is easily accessible to everyone, it has a child-friendly interface and can be adapted to in no time.",
      },
      {
        icon: <FaBeer />,
        title: "secure payment",
        info:
          "We offer save, guarded and secure payment via 3D online secure payment using paypal.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
