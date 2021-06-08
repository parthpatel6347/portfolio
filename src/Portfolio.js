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
    // border: "1px solid white",
    // height: "70%",
    alignSelf: "center",
    display: "grid",
  },
  titleContainer: {
    fontFamily: "'Karla', sans-serif;",

    position: "relative",
    top: "250px",
    right: "160px",
    gridArea: "1/1",
    height: "150px",
    // border: "1px solid white",
    zIndex: "5",
    "& h1": {
      fontWeight: "300",
      letterSpacing: "8px",
      color: "white",
      margin: 0,
      fontSize: "65px",
    },
    "& p": {
      fontWeight: "700",
      letterSpacing: "6px",
      fontSize: "20px",
      color: "#70A3C1",
      margin: 0,
      marginLeft: "3px",
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
