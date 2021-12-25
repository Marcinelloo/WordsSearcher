import React from "react";
import classes from "./MessageBox.module.css";
export default function MessageBox(props) {
  return (
    <div className={classes.danger}>
      {props.children}
    </div>
  );
}
