import React from "react";
import CardMain from "./CardMain";
import { makeStyles } from "@material-ui/core/styles";

const useStlyes = makeStyles({
  root: {
    position: "relative",
    border: "1px solid white",
    height: "900px",
    width: "600px",
  },
  top: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: "3",
  },
  middle: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "2",
    "&:hover": {
      zIndex: "4",
    },
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: "1",
    "&:hover": {
      zIndex: "4",
    },
  },
});

function CardContainer(props) {
  const classes = useStlyes();
  return (
    <div className={classes.root}>
      <div className={classes.bottom}>
        <CardMain color="green" />
      </div>
      <div className={classes.middle}>
        <CardMain color="pink" />
      </div>
      <div className={classes.top}>
        <CardMain color="blue" />
      </div>
    </div>
  );
}

export default CardContainer;
