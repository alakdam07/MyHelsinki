import React, { useEffect, useState } from "react";
import "./ActivitiesList.css";
import axios from "axios";

import "./ActivitiesList.css";

function ActivitiesList() {
  const [activities, setactivities] = useState({ data: [] });
  const [show, setshow] = useState(10);

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = () => {
    axios
      .get("/activities")
      .then(response => {
        //console.log("response", response);
        setactivities({ data: response.data.data });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="EventList">
      <section className="our-event">
        <div className="grid-container">
          {activities.data.slice(0, show).map((list, index) => {
            return (
              <div key={index}>
                <a
                  href={list.info_url}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black"
                  }}
                  target="a_blank"
                >
                  {list.description.images[0] ? (
                    <div className="whole">
                      <div className="Personcontainer">
                        <div className="box">
                          <img
                            src={list.description.images[0].url}
                            alt="pics"
                            style={{ width: "270px", height: "270px" }}
                          />
                          <h4 style={{ color: "white" }}>{list.name.en}</h4>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </a>
              </div>
            );
          })}
        </div>
        {show < activities.data.length && (
          <button onClick={() => setshow(show + 10)} className="Button">
            Load More
          </button>
        )}
      </section>
    </div>
  );
}

export default ActivitiesList;
