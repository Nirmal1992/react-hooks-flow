import React from "react";

const Name = props => <div> Hello {props.name}</div>;

Name.propTypes = {
  name: function(props, propName, componentName) {
    console.log("===================================");
    console.log("props =>", props);
    console.log("propName =>", propName);
    console.log("componentName =>", componentName);

    if (typeof props[propName] !== "string") {
      console.warn("Please Enter a String");
    }
  }
};
export default Name;
