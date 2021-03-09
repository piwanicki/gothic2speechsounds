import React from "react";
import classes from "./Layout.module.scss";
import Controls from "../../Components/Controls/Controls";
import RightsAdnotation from "../../Components/RightsAdnotation/rightsAdnotation";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Controls />
      <RightsAdnotation />
      {props.children}
    </div>
  );
};

export default Layout;
