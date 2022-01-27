import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "./styles/sizes";

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
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    [sizes.widthDown("sm")]: {
      marginTop: "40px",
      justifyContent: "center",
      height: "410px",
      width: "348px",
      borderRadius: "34px",
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
    height: "157px",
    paddingRight: "40px",
    width: "100%",
    [sizes.widthDown("sm")]: {
      flexDirection: "column",
      paddingRight: "0",
      height: "100%",
      width: "80%",
    },
  },
  thumb: {
    boxSizing: "border-box",
    height: "157px",
    width: "170px",
    backgroundImage: (props) => `url(${props.thumb})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    left: "-30px",
    borderRadius: "15px",
    transition: "all .3s",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",     // boxShadow:
    //   "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
    [sizes.widthDown("sm")]: {
      height: "166spx",
      width: "213px",
      left: "unset",
      top: "-40px",
      borderRadius: "20px",
    },
  },
  description: {
    fontFamily: "'Karla', sans-serif;",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    marginLeft: "-6px",
    width: "360px",
    [sizes.widthDown("sm")]: {
      display: "none",
    },
    "& h3": {
      margin: 0,
      fontSize: "32px",
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
        marginLeft: "30px",
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
    "& span": {
      fontSize: "16px",
      letterSpacing: "1.5px",
      color: "rgba(0,0,0,0.65)",
      marginTop: "15px",
      padding: "10px",
      fontWeight: "500",
      border: "1px solid rgba(0,0,0,0.07)",
      borderRadius: "15px",
      backgroundColor: "rgba(255,255,255,0.25)"
    },
  },
  descriptionMobile: {
    fontFamily: "'Karla', sans-serif;",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    textAlign: "center",
    [sizes.smallUp()]: {
      display: "none",
    },
    "& a": {
      textDecoration: "none",
      "&:visited": {
        color: "black",
      },
      "& h3": {
        margin: 0,
        fontSize: "40px",
        fontWeight: "300",
        letterSpacing: "2px",
        marginTop: "-10px",
        color: "black",
      },
    },

    "& p": {
      margin: 0,
      fontSize: "20px",
      fontWeight: "300",
      letterSpacing: "1px",
      marginTop: "10px",
    },
    "& span": {
      fontSize: "16px",
      letterSpacing: "1.5px",
      marginTop: "15px",
      fontWeight: "300",
    },
    "& div": {
      marginBottom: "15px",
      "& i": {
        fontSize: "35px",
        margin: "0 30px",
        opacity: ".5",
        color: "black",
      },
    },
  },
});

function ProjectCard(props) {
  const classes = useStlyes(props);
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          title={props.link && "Go to website"}
        >
          <div className={classes.thumb}></div>
        </a>
        <div className={classes.description}>
          <div>
            <h3>
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                title={props.link && "Go to website"}
              >
                {props.name}
                {props.link && <i className="bi bi-box-arrow-up-right"></i>}
              </a>
              <a
                href={props.github}
                target="_blank"
                rel="noreferrer"
                title="Go to Github repository"
              >
                <i className="bi bi-github"></i>
              </a>
            </h3>
            <p>{props.description}</p>
          </div>
          <span>{props.used}</span>
        </div>
        <div className={classes.descriptionMobile}>
          <section>
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
              title="Go to website"
            >
              <h3>{props.name}</h3>
            </a>
            <p>{props.description}</p>
          </section>
          <section style={{ marginBottom: "25px" }}>
            <div>
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                title="Go to website"
              >
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
              <a
                href={props.github}
                target="_blank"
                rel="noreferrer"
                title="Go to Github repository"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
            <span>{props.used}</span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
