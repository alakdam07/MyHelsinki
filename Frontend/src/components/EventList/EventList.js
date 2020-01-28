import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./EventList.css";

function EventList() {
  const [events, setEvents] = useState({ data: [] });
  const [show, setshow] = useState(20);

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = () => {
    axios
      .get("/events")
      .then(response => {
        //console.log("response", response);
        setEvents({ data: response.data.data });
      })
      .catch(err => console.log(err));
  };

  const eventDates = events.data.reduce((acc, event) => {
    acc[event.id] = {
      startDate: moment(event.event_dates.starting_day),
      endDate: moment(event.event_dates.ending_day),
      image: event.description.images.map(img => img.url),
      name: event.name.en,
      info: event.info_url,
      address: event.location.address.street_address
    };
    return acc;
  }, {});
  //console.log(eventDates);
  let sortedByStartDate = Object.keys(eventDates);
  sortedByStartDate.sort(
    (a, b) => eventDates[a].startDate - eventDates[b].startDate
  );
  return (
    <div className="EventList">
      <section className="our-event">
        <div className="grid-container">
          {sortedByStartDate.slice(0, show).map((list, index) => {
            return (
              <div key={index}>
                <noscript>{eventDates[list].startDate.calendar()}</noscript>
                <a
                  href={eventDates[list].info}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black"
                  }}
                  target="a_blank"
                >
                  <div className="whole">
                    <div className="Personcontainer">
                      <div className="box">
                        <img
                          src={eventDates[list].image}
                          style={{ width: "270px", height: "270px" }}
                          alt="pics from cloudnairy"
                        />
                        <h4 style={{ color: "white" }}>
                          {eventDates[list].name}
                        </h4>
                        <h4 style={{ color: "white" }}>
                          Start: {eventDates[list].startDate.calendar()}
                        </h4>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <br></br>
        <br></br>
        {show < events.data.length && (
          <button onClick={() => setshow(show + 10)} className="Button">
            Load More
          </button>
        )}
      </section>
    </div>
  );
}

export default EventList;

// <figure className="event-member">
// <img src={eventDates[list].image} alt="images" />
// <figcaption>
//   <h4 className="name">{eventDates[list].name}</h4>
//   <br></br>
//   <p>{eventDates[list].startDate.calendar()}</p>
// </figcaption>
// </figure>
