import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "./styles/sizes";

const useStlyes = makeStyles({
  root: {
    height: "550px",
    width: "350px",
    borderRadius: "35px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backdropFilter: "blur(27px)",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
    [sizes.medium()]: {
      height: "380px",
      width: "245px",
      borderRadius: "30px",
    },
    [sizes.small()]: {
      height: "342px",
      width: "220px",
      borderRadius: "25px",
    },
  },
  cardTop: {
    width: "100%",
    height: "87%",
    backgroundImage: (props) => `url(${props.background})`,
    backgroundSize: "cover",
  },
  cardBottom: {
    width: "100%",
    height: "13%",
    opacity: ".17",
    backgroundColor: "white",
  },
  text: {
    color: (props) => props.color,
  },
});

function CardMain(props) {
  const { text } = props;
  const classes = useStlyes(props);
  return (
    <div className={classes.root}>
      <div className={classes.cardTop}></div>
      <div className={classes.cardBottom}>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
}

export default CardMain;
