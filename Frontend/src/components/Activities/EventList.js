import React from 'react';
import './EventList.css';

import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
import four from './four.jpg'
import five from './five.jpg'
import six from './six.jpg'
import seven from './seven.jpg'
import eight from './eight.jpg'
import nine from './nine.jpg'
import ten from './ten.jpg'
import eleven from './eleven.jpg'
import twelve from './twelve.jpg'
import thirteen from './thirteen.jpg'
import fourteen from './fourteen.jpg'





function EventList() {
  return (
    <div className="EventList">
      <section className="our-event">
        <div className="grid-container">

          <div className="event-description">
            <h3 className="event-title"> Up coming <span> Events </span> </h3>
            <p> Take a look at the newest events around you!</p>
          </div>

          <figure className="event-member">
            <img src={one} alt="one" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={two} alt="Two" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={three} alt="three" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={four} alt="four" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={five} alt="five" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={six} alt="six" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={seven} alt="seven" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={eight} alt="eight" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={nine} alt="nine" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={ten} alt="ten" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={eleven} alt="eleven" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={twelve} alt="twelve" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={thirteen} alt="thirteen" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

          <figure className="event-member">
            <img src={fourteen} alt="fourteen" />
            <figcaption>
              <h4 className="name">Event name</h4>
            </figcaption>
          </figure>

        </div>
      </section>
    </div>
  );
}

export default EventList;
