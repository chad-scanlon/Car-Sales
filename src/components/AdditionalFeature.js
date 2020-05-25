import React, { useContext } from "react";
import { addFeature } from "../actions/index";
import { addContext } from "../context/context";

const AdditionalFeature = (props) => {
  console.log(props.feature);
  const addItem = useContext(addContext);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          addItem(props.feature);
        }}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
