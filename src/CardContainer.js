import React from "react";
import CardMain from "./CardMain";
import { makeStyles } from "@material-ui/core/styles";
import blue from "./styles/imgs/blue.png";
import pink from "./styles/imgs/pink.png";
import green from "./styles/imgs/green.png";
import sizes from "./styles/sizes";

import { Link } from "react-scroll";

const useStlyes = makeStyles({
  root: {
    position: "relative",
    left: "140px",
    gridArea: "1/1",
    // border: "1px solid white",
    height: "650px",
    width: "500px",
    [sizes.medium()]: {
      height: "450px",
      width: "359px",
      left: "102px",
    },
    [sizes.small()]: {
      left: "unset",
      gridArea: "2/1",
      height: "405px",
      width: "323px",
    },
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
    // "&:hover": {
    //   zIndex: "4",
    // },
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: "1",
    // "&:hover": {
    //   zIndex: "4",
    // },
  },
});

function CardContainer(props) {
  const cardData = {
    card1: {
      background: blue,
      text: "Projects",
      color: "blue",
    },
    card2: {
      background: pink,
      text: "About Me",
      color: "Pink",
    },
    card3: {
      background: green,
      text: "Contact",
      color: "green",
    },
  };
  const classes = useStlyes();
  return (
    <div className={classes.root}>
      <Link to="projects" smooth={true}>
        <div className={classes.top}>
          <CardMain {...cardData.card1} />
        </div>
      </Link>
      <Link to="aboutMe" smooth={true}>
        <div className={classes.middle}>
          <CardMain {...cardData.card2} />
        </div>
      </Link>
      <Link to="contactMe" smooth={true}>
        {" "}
        <div className={classes.bottom}>
          <CardMain {...cardData.card3} />
        </div>
      </Link>
    </div>
  );
}

export default CardContainer;
