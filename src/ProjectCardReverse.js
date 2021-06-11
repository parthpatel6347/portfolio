import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStlyes = makeStyles({
  root: {
    height: "225px",
    width: "560px",
    backgroundImage: (props) => `url(${props.background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
  },
  content: {
    display: "flex",
    alignItems: "center",
    height: "157px",
    paddingLeft: "40px",
    width: "100%",
  },
  thumb: {
    height: "157px",
    width: "170px",
    backgroundImage: (props) => `url(${props.thumb})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    right: "-30px",
    borderRadius: "15px",
    transition: "all .3s",
  },
  description: {
    fontFamily: "'Karla', sans-serif;",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    marginRight: "-6px",
    width: "360px",
    textAlign: "right",
    "& h3": {
      margin: 0,
      fontSize: "35px",
      fontWeight: "300",
      letterSpacing: "2px",
      marginTop: "0px",
      "& a": {
        textDecoration: "none",
        "&:visited": {
          color: "black",
        },
      },
      "& i": {
        fontSize: "22px",
        marginRight: "30px",
        opacity: ".5",
        "&:hover": {
          opacity: "1",
          cursor: "pointer",
        },
      },
    },
    "& p": {
      margin: 0,
      fontSize: "18px",
      fontWeight: "300",
      letterSpacing: "1.5px",
      marginTop: "10px",
    },
  },
  madeWith: {
    fontSize: "18px",
    letterSpacing: "1.5px",

    marginTop: "12px",
    fontWeight: "300",
  },
});

function ProjectCardReverse(props) {
  const classes = useStlyes(props);
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.description}>
          <h3>
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              title="Go to Github repository"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
              title="Go to website"
            >
              <i className="bi bi-box-arrow-up-right"></i>
              {props.name}
            </a>
          </h3>
          <p>{props.description}</p>
          <span className={classes.madeWith}>Made with: {props.used}</span>
        </div>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          title="Go to website"
        >
          <div className={classes.thumb}></div>
        </a>
      </div>
    </div>
  );
}

export default ProjectCardReverse;
