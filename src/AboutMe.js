import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import background from "./background.svg";
import bg1 from "./styles/imgs/bg1.png";

const useStlyes = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    // backgroundImage: `url(${background})`,
  },
  bg: {
    width: "110%",
    position: "relative",
    left: "-50px",
  },
});

function AboutMe(props) {
  const classes = useStlyes();

  return (
    <div className={classes.root}>
      <img className={classes.bg} src={background} alt="My Happy SVG" />
    </div>
  );
}

export default AboutMe;
