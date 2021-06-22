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
import Pdf from "./documents/Resume-Parth Patel.pdf";

const useStlyes = makeStyles({
  root: {
    width: "100%",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
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
      height: "590px",
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
    justifyContent: "space-around",
    border: "2px solid rgba(255,255,255,0.3)",
    [sizes.widthDown("l")]: {
      height: "570px",
      width: "345px",
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
  },
  text: {
    fontFamily: "'Karla', sans-serif;",
    textAlign: "center",
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
    },
    "& p": {
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "30px",
      letterSpacing: "",
      margin: 0,
    },
  },
  picture: {
    borderRadius: "50%",
    height: "150px",
    border: "6px solid rgba(255,255,255,1)",
  },

  icon: {
    height: "36px",
    margin: "12px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  button: {
    marginTop: "20px",
    borderRadius: "13px",
    width: "90px",
    height: "26px",
    width: "80px",
    "& span": {
      fontSize: "12px",
      color: "white",
      textTransform: "none",
      fontFamily: "'Karla', sans-serif;",
      textDecoration: "none",
    },
  },
  divider: {
    justifySelf: "center",
    display: "flex",
    alignItems: "center",
    marginBottom: "100px",
    marginTop: "50px",
    [sizes.widthDown("sm")]: {
      flexDirection: "column",
      width: "100%",
      paddingLeft: "5%",
      paddingRight: "5%",
      boxSizing: "border-box",
    },
    "& h1": {
      color: "white",
      fontFamily: "'Karla', sans-serif;",
      fontWeight: "300",
      letterSpacing: "8px",
      fontSize: "42px",
      [sizes.widthDown("sm")]: {
        letterSpacing: "6px",
        fontSize: "42px",
        textTransform: "uppercase",
        fontWeight: "400",
        marginBottom: "10px",
        alignSelf: "flex-start",
      },
    },
  },
  line: {
    marginTop: "12px",
    marginLeft: "10px",
    height: "4px",
    width: "500px",
    backgroundImage: "linear-gradient( 135deg, #699AB8 10%, #7e69b8 100%)",
    [sizes.widthDown("sm")]: {
      width: "100%",
      marginTop: "2px",
    },
  },
});

function AboutMe(props) {
  const classes = useStlyes();

  const openResume = () => {
    window.open(Pdf);
  };

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
              <p style={{ marginTop: "5px" }}>I love to code and design.</p>
              <p>I turn ideas into experiences.</p>
              <div className={classes.buttonContainer}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  disableRipple
                  onClick={openResume}
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
            <img className={classes.icon} src={react} alt="react" />
            <img className={classes.icon} src={nodejs} alt="nodejs" />
            <img className={classes.icon} src={materialUI} alt="materialUI" />
            <img className={classes.icon} src={bootstrap} alt="bootstrap" />
            <img className={classes.icon} src={illustrator} alt="illustrator" />
            <img className={classes.icon} src={photoshop} alt="photoshop" />
            <img className={classes.icon} src={xd} alt="xd" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
