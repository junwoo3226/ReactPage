import React from "react";
function FacilityBox(props) {
  return (
    <>
      <h2 className="wp-block-heading">
        <strong>
          <a href={props.url} target="_blank" rel="noreferrer noopener" >
            {props.title}
          </a>
          <sup>
            <a href={props.url} target="_blank" rel="noreferrer noopener">
              ↗
            </a>
          </sup>
        </strong>
      </h2>

      <p className="has-huge-font-size"></p>
    </>
  );
}

export default FacilityBox;
