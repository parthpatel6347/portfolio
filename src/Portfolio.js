import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContainer from "./CardContainer";

const useStlyes = makeStyles({
  root: {
    backgroundColor: "#142534",
    width: "100%",
    boxSizing: "border-box",
    height: "100vh",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    border: "1px solid white",
    marginLeft: "15%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
  },
  titleContainer: {
    position: "absolute",
    left: "45%",
    transform: "translate(-50%,0)",
    top: "500px",
    zIndex: "5",
    "& h1": {
      color: "white",
      margin: 0,
      fontSize: "65px",
    },
    "& p": {
      color: "#70A3C1",
      margin: 0,
    },
  },
});

const Portfolio = () => {
  const classes = useStlyes();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <p>PARTH PATEL</p>
          <h1>FrontEnd Developer</h1>
        </div>
        <CardContainer />
      </div>
    </div>
  );
};

export default Portfolio;
