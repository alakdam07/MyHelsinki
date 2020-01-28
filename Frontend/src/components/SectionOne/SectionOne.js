import React, { Component } from 'react';
import './SectionOne.css';
import { NavLink } from "react-router-dom";

import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'

class ScrollOne extends Component {

render() {
    return (
      <div id="SectionOne" className="SectionOne">
        <section>
          <div  id="Explore" className="Container">
            <h1 className="Heading">Explore </h1>
              <div className="Card-wrapper">
                <div className="Card">
                  <img src={one} alt="One" />
                  <h1>Places</h1>
                  <p>Over 2000 places of interest, restaurants, shops, hotels etc. in and around Helsinki. Data is frequently updated by local businesses, locals and visitors alike.
                  </p>
                  <NavLink className="Btn" to="/places">Read more</NavLink>
                </div>

                <div className="Card">
                  <img src={two} alt="Two" />
                  <h1>Events</h1>
                  <p>Frequently updated events from multiple cultural event organizers including concerts, sports events, museum exhibitions and many more.
                  </p>
                  <NavLink className="Btn" to="/events">Read more</NavLink>
                </div>

                <div className="Card">
                  <img src={three} alt="Three" />
                  <h1>Activities</h1>
                  <p>High-quality experiences from local service providers, including for example archipelago cruises and city walking tours.
                  </p>
                  <NavLink className="Btn" to="/Activities">Read more</NavLink>
                </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ScrollOne;
