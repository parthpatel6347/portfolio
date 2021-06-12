import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContainer from "./CardContainer";
import sizes from "./styles/sizes";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

const useStlyes = makeStyles({
  root: {
    backgroundColor: "#142534",
    width: "100%",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  home: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  container: {
    // border: "1px solid white",
    // height: "70%",
    alignSelf: "center",
    display: "grid",
    [sizes.small()]: {
      marginTop: "-75px",
    },
  },
  titleContainer: {
    fontFamily: "'Karla', sans-serif;",

    position: "relative",
    top: "175px",
    right: "140px",
    gridArea: "1/1",
    height: "150px",
    // border: "1px solid white",
    zIndex: "5",
    [sizes.medium()]: {
      top: "125px",
      right: "105px",
    },
    [sizes.small()]: {
      position: "unset",
      top: "unset",
      right: "unset",
      height: "unset",
      justifySelf: "center",
      width: "289px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingLeft: "2px",
    },
    "& h1": {
      fontWeight: "300",
      letterSpacing: "10px",
      color: "white",
      margin: 0,
      fontSize: "60px",
      [sizes.medium()]: {
        fontSize: "42px",
        letterSpacing: "9px",
      },
      [sizes.small()]: {
        fontSize: "32px",
        letterSpacing: "7px",
        marginBottom: "48px",
      },
    },
    "& p": {
      fontWeight: "700",
      letterSpacing: "4px",
      fontSize: "18px",
      color: "#70A3C1",
      margin: 0,
      marginLeft: "3px",
      [sizes.medium()]: {
        fontSize: "14px",
        letterSpacing: "3px",
      },
      [sizes.small()]: {
        width: "100%",
      },
    },
  },
});

const Portfolio = () => {
  const classes = useStlyes();
  return (
    <div className={classes.root}>
      <div className={classes.home}>
        <div className={classes.container}>
          <div className={classes.titleContainer}>
            <p>PARTH PATEL</p>
            <h1>Front End Dev</h1>
          </div>
          <CardContainer />
        </div>
      </div>

      <Projects />
      <AboutMe />
    </div>
  );
};

export default Portfolio;
