import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStlyes = makeStyles({
  root: {
    height: "750px",
    width: "450px",
    backgroundColor: (props) => props.color,
  },
});

function CardMain(props) {
  const classes = useStlyes(props);
  return <div className={classes.root}></div>;
}

export default CardMain;
