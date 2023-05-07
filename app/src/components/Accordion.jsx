import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";

import data from "../json/data.json";

const Accordion = () => {
  const [isActive, setActive] = useState(null);

  const toggle = (i) => {
    if (isActive !== i) setActive(i);
    else setActive(null);
  };

  return (
    <div className="col-md-12 accordion">
      {data.map((item, index) => (
        <div key={index} className="item">
          <div className="title" onClick={() => toggle(index)}>
            <h5>{item.title}</h5>
            <span>{isActive === index ? "-" : "+"}</span>
          </div>
          <Collapse in={isActive === index ? true : false}>
            <div className="content">
              <p>{item.content}</p>
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
