import React, { useContext } from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/index";
import { removeContext } from "../context/context";

const AddedFeature = (props) => {
  console.log(props);
  const removeItem = useContext(removeContext);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          removeItem(props.feature);
        }}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
