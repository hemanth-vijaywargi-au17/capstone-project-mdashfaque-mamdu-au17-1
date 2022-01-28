import React, { useState } from "react";
import "./tabs.css";

function Tabs(props) {
  const [selected, setSelected] = useState(props.selected || 0);

  return (
    <>
      <div className="p-2">
        {props.children.map((elem, index) => {
          if (elem !== null) {
            let style = index === selected ? "tab-title selected" : "tab-title";
            return (
              <div
                key={index}
                className={style}
                onClick={() => setSelected(index)}
              >
                {elem.props.title}
              </div>
            );
          }
          return null;
        })}
      </div>
      {props.children[selected]}
    </>
  );
}

export default Tabs;
