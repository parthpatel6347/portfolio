import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStlyes = makeStyles({
  root: {
    height: "750px",
    width: "500px",
    borderRadius: "45px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  cardTop: {
    background: "black",
    width: "100%",
    height: "85%",
  },
  cardBottom: {
    width: "100%",
    height: "15%",
    opacity: ".17",
    backgroundColor: (props) => props.color,
  },
});

function CardMain(props) {
  const classes = useStlyes(props);
  return (
    <div className={classes.root}>
      <div className={classes.cardTop}></div>
      <div className={classes.cardBottom}></div>
    </div>
  );
}

export default CardMain;
