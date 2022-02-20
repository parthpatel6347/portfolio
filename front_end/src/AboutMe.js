import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import sizes from "./styles/sizes";

import background from "./styles/imgs/aboutMeBg.png";
import picture from "./styles/imgs/picture.png";
import bootstrap from "./styles/icons/bootstrap.svg";
import css from "./styles/icons/CSS.png";
import html5 from "./styles/icons/html5.svg";
import illustrator from "./styles/icons/Illustrator.svg";
import javascript from "./styles/icons/javascript.svg";
import materialUI from "./styles/icons/material-ui.svg";
import nodejs from "./styles/icons/nodejs.svg";
import photoshop from "./styles/icons/Photoshop.svg";
import xd from "./styles/icons/Xd.svg";
import react from "./styles/icons/react.png";
import django from "./styles/icons/django.png";
import python from "./styles/icons/python.png";

const useStlyes = makeStyles({
  root: {
    width: "100%",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "250px",
  },
  containerBg: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "580px",
    width: "930px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "45px",
    [sizes.widthDown("l")]: {
      justifySelf: "center",
      height: "650px",
      width: "365px",
    },
  },
  container: {
    boxSizing: "border-box",
    height: "550px",
    width: "900px",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: "35px",
    backdropFilter: "blur(27px)",
    padding: "75px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "2px solid rgba(255,255,255,0.3)",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 3px 6px, rgba(0, 0, 0, 0.18) 0px 3px 6px",
    [sizes.widthDown("l")]: {
      height: "630px",
      width: "345px",
      padding: "25px",
      justifyContent: "unset",
    },
  },
  topRow: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [sizes.widthDown("l")]: {
      display: "grid",
    },
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "25px",
    [sizes.widthDown("l")]: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
      justifyItems: "center",
      marginTop: "40px",
    },
  },
  text: {
    fontFamily: "'Karla', sans-serif;",
    textAlign: "center",
    marginLeft: "-20px",
    [sizes.widthDown("l")]: {
      margin: "unset",
      gridRowStart: "2",
    },
    "& span": {
      fontSize: "24px",
      fontWeight: "300",
      letterSpacing: "1px",
      color: "grey",
    },
    "& h1": {
      fontSize: "56px",
      fontWeight: "300",
      letterSpacing: "",
      margin: 0,
      paddingTop: "12px",
      [sizes.widthDown("l")]: {
        fontSize: "50px",
        marginTop: "15px",
      },
    },
    "& p": {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "25px",
      letterSpacing: "",
      margin: 0,
      width: "450px",
      opacity: 0.9,
      [sizes.widthDown("l")]: {
        width: "unset",
        fontSize: "18px",
        lineHeight: "22px",
      },
    },
  },
  picture: {
    borderRadius: "50%",
    height: "150px",
    border: "6px solid rgba(255,255,255,1)",
    [sizes.widthDown("l")]: {
      justifySelf: "center",
      height: "134px",
      border: "5px solid rgba(255,255,255,1)",
      marginTop: "5px",
    },
  },

  icon: {
    height: "36px",
    margin: "20px",
    [sizes.widthDown("l")]: {
      height: "30px",
      margin: "12px 10px",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    [sizes.widthDown("l")]: {
      justifyContent: "space-around",
    },
  },
  button: {
    marginTop: "30px",
    borderRadius: "15px",
    width: "90px",
    height: "28px",
    [sizes.widthDown("l")]: {
      width: "100px",
      height: "30px",
      borderRadius: "15px",
      marginTop: "25px",
    },
    "& span": {
      fontSize: "14px",
      color: "white",
      textTransform: "none",
      fontFamily: "'Karla', sans-serif;",
      textDecoration: "none",
      [sizes.widthDown("l")]: {
        fontSize: "16px",
      },
    },
  },
  divider: {
    justifySelf: "center",
    display: "flex",
    alignItems: "center",
    marginBottom: "90px",
    marginTop: "10px",
    [sizes.widthDown("sm")]: {
      flexDirection: "column",
      width: "100%",
      paddingLeft: "5%",
      paddingRight: "5%",
      boxSizing: "border-box",
    },
    "& h1": {
      margin: "0",
      color: "white",
      fontFamily: "'Karla', sans-serif;",
      fontWeight: "300",
      letterSpacing: "8px",
      fontSize: "20px",
      textTransform: "uppercase",
      [sizes.widthDown("sm")]: {
        letterSpacing: "6px",
        fontSize: "20px",
        textTransform: "uppercase",
        fontWeight: "400",
        marginBottom: "10px",
        alignSelf: "flex-start",
      },
    },
  },
  line: {
    marginLeft: "10px",
    height: "4px",
    width: "500px",
    backgroundImage: "linear-gradient( 135deg, #699AB8 10%, #7e69b8 100%)",
    [sizes.widthDown("sm")]: {
      width: "100%",
      marginTop: "2px",
      marginLeft: "0",
    },
  },
});

function AboutMe(props) {
  const classes = useStlyes();

  return (
    <div className={classes.root}>
      <div className={classes.divider}>
        <h1>About Me</h1>
        <div className={classes.line}></div>
      </div>
      <div className={classes.containerBg}>
        <div className={classes.container}>
          <div className={classes.topRow}>
            <div className={classes.text}>
              <h1>Hi, I'm Parth.</h1>
              <p style={{ marginTop: "5px" }}>
                I'm a Web Developer with a passion for creating beautiful,
                modern web experiences.
              </p>
              <p>
                I enjoy coding, designing and learning something new everyday.
              </p>
              <div className={classes.buttonContainer}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  disableRipple
                  href="https://drive.google.com/file/d/1_Zssah9alLhx46wcuHCzDwLOqV9xe91c/view?usp=sharing"
                  target="_blank"
                >
                  <span>Resume</span>
                </Button>

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  disableRipple
                  href="https://github.com/parthpatel6347"
                  target="_blank"
                >
                  <span>GitHub</span>
                </Button>
              </div>
            </div>
            <img className={classes.picture} src={picture} alt="parth" />
          </div>
          <div className={classes.bottomRow}>
            <img className={classes.icon} src={html5} alt="html5" />
            <img className={classes.icon} src={css} alt="css" />
            <img className={classes.icon} src={javascript} alt="javascipt" />
            <img className={classes.icon} src={python} alt="python" />
            <img className={classes.icon} src={react} alt="react" />
            <img className={classes.icon} src={nodejs} alt="nodejs" />
            <img className={classes.icon} src={django} alt="django" />
            <img className={classes.icon} src={bootstrap} alt="bootstrap" />
            <img className={classes.icon} src={photoshop} alt="photoshop" />
            <img className={classes.icon} src={xd} alt="xd" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
