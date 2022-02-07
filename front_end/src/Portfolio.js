import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContainer from "./CardContainer";
import sizes from "./styles/sizes";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import { Element } from "react-scroll";

import ScrollTop from "./ScrollTop";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStlyes = makeStyles({
  root: {
    background: "linear-gradient(62deg, rgba(11,27,41,1) 0%, rgba(11,38,62,1) 65%, rgba(21,75,122,1) 100%)",
    width: "100%",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    [sizes.widthDown("md")]: {
      background: "#0D2941",
    },
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
      textShadow: "4px 4px 2px rgba(0,0,0,0.5)",
      [sizes.medium()]: {
        fontSize: "42px",
        letterSpacing: "9px",
      },
      [sizes.small()]: {
        fontSize: "32px",
        letterSpacing: "7px",
        marginBottom: "48px",
        textShadow: "3px 3px 0px rgba(0,0,0,0.3)",
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
  topBtn: {
    backgroundColor: "rgba(255,255,255,.7)",
    backdropFilter: "blur(10px)",
  },
});

const Portfolio = (props) => {
  const classes = useStlyes();
  return (
    <div className={classes.root} id="back-to-top-anchor">
      <div className={classes.home}>
        <div className={classes.container}>
          <div className={classes.titleContainer}>
            <p>PARTH PATEL</p>
            <h1>Web Developer</h1>
          </div>
          <CardContainer />
        </div>
      </div>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="aboutMe">
        <AboutMe />
      </Element>
      <Element name="contactMe">
        <ContactMe />
      </Element>
      <ScrollTop {...props}>
        <Fab
          className={classes.topBtn}
          disableRipple
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Portfolio;
