import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import data from "../json/data.json";

const Accordion = () => {
  const [isActive, setActive] = useState(null);

  const toggle = (i) => {
    if (isActive === i) {
      return setActive(null);
    }
    setActive(i);
  };

  return (
    <div className="col-md-12 acardion">
      {data.map((item, i) => (
        <div key={i} className="item">
          <div className="title" onClick={() => toggle(i)}>
            <h5>{item.title}</h5>
            <span>{isActive === i ? "-" : "+"}</span>
          </div>
          <div className={isActive === i ? "content show" : "content"}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
