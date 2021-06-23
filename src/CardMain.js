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
    transition: "all 0.3s ease-in-out",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 10px 10px 20px, rgba(0, 0, 0, 0.23) 6px 6px 6px",
    "&:hover": {
      transform: "scale(1.01)",
      cursor: "pointer",
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
      boxShadow:
        "rgba(0, 0, 0, 0.19) 5px 5px 10px, rgba(0, 0, 0, 0.23) 3px 3px 3px",
    },
  },
  cardTop: {
    transition: "all 0.3s ease-in-out",
    width: "100%",
    height: "87%",
    backgroundImage: (props) => `url(${props.background})`,
    backgroundSize: "cover",
  },
  cardBottom: {
    border: "2px solid rgba(255,255,255,0.1)",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    boxSizing: "border-box",
    borderRadius: "35px",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    width: "100%",
    height: "13%",
    backgroundColor: "rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    [sizes.medium()]: {
      borderRadius: "30px",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
    },
    [sizes.small()]: {
      borderRadius: "25px",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
    },
  },
  text: {
    marginRight: "40px",
    color: (props) => props.color,
    textTransform: "uppercase",
    fontFamily: "'Karla', sans-serif;",
    letterSpacing: "3px",
    fontSize: "18px",
    fontWeight: "500",
    textShadow: "2px 2px 1px rgba(0,0,0,0.4)",
    [sizes.medium()]: {
      margin: "0px",
      marginBottom: "10px",
      marginRight: "25px",
      fontSize: "16px",
      fontWeight: "600",
    },
    [sizes.small()]: {
      margin: "0px",
      marginBottom: "10px",
      marginRight: "20px",
      fontSize: "16px",
      fontWeight: "600",
    },
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
