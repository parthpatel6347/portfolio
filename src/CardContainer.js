import React from "react";
import CardMain from "./CardMain";
import { makeStyles } from "@material-ui/core/styles";
import blue from "./styles/imgs/blue.png";
import pink from "./styles/imgs/pink.png";
import green from "./styles/imgs/green.png";

const useStlyes = makeStyles({
  root: {
    position: "relative",
    left: "160px",
    gridArea: "1/1",
    // border: "1px solid white",
    height: "900px",
    width: "700px",
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
      <div className={classes.top}>
        <CardMain {...cardData.card1} />
      </div>
      <div className={classes.middle}>
        <CardMain {...cardData.card2} />
      </div>
      <div className={classes.bottom}>
        <CardMain {...cardData.card3} />
      </div>
    </div>
  );
}

export default CardContainer;
