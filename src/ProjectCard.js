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
  },
  thumb: {
    height: "157px",
    width: "170px",
    backgroundColor: "pink",
    position: "relative",
    left: "-30px",
    borderRadius: "15px",
  },
  description: {
    fontFamily: "'Karla', sans-serif;",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    marginLeft: "-6px",
    "& h3": {
      margin: 0,
      fontSize: "26px",
      fontWeight: "300",
      letterSpacing: "3px",
      marginTop: "7px",
      "& a": {
        textDecoration: "none",
        "&:visited": {
          color: "black",
        },
      },
      "& i": {
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
      fontSize: "16px",
      fontWeight: "300",
      letterSpacing: "1.5px",
      marginTop: "7px",
    },
  },
});

function ProjectCard(props) {
  const classes = useStlyes(props);
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.thumb}></div>
        <div className={classes.description}>
          <h3>
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
              title="Go to website"
            >
              {props.name}
              <i
                className="fas fa-external-link-alt fa-xs"
                style={{
                  fontSize: "16px",
                  verticalAlign: "8%",
                  marginLeft: "10px",
                }}
              ></i>
            </a>
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              title="Go to Github repository"
            >
              <i className="fab fa-github fa-xs"></i>
            </a>
          </h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
