import React from "react";
import ProjectCard from "./ProjectCard";
import { makeStyles } from "@material-ui/core/styles";
import bg1 from "./styles/imgs/bg1.png";
import bg2 from "./styles/imgs/bg2.png";
import bg3 from "./styles/imgs/bg3.png";
import bg4 from "./styles/imgs/bg4.png";
import bg5 from "./styles/imgs/bg5.png";
import bg6 from "./styles/imgs/bg6.png";
import colorPaletteThumb from "./styles/imgs/colorPaletteThumb.png";
import ProjectCardReverse from "./ProjectCardReverse";
import todoThumb from "./styles/imgs/todoThumb.png";
import streetCourtsThumb from "./styles/imgs/streetCourtsThumb.png";

const useStlyes = makeStyles({
  root: {
    width: "100%",
    paddingBottom: "100px",
    display: "grid",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    gridGap: "75px",
    justifySelf: "center",
  },
  divider: {
    justifySelf: "center",
    display: "flex",
    alignItems: "center",
    marginBottom: "100px",
    marginTop: "50px",
    "& h1": {
      color: "white",
      fontFamily: "'Karla', sans-serif;",
      fontWeight: "300",
      letterSpacing: "8px",
      fontSize: "42px",
      // textTransform: "uppercase",
    },
  },
  line: {
    marginTop: "12px",
    marginLeft: "10px",
    height: "2px",
    width: "500px",
    backgroundColor: "#70A3C1",
  },
});

function Projects(props) {
  const projectsData = {
    project1: {
      background: bg2,
      name: "colorPalette",
      description: "Create and save beautiful color palettes.",
      used: "React, Material UI",
      thumb: colorPaletteThumb,
      link: "https://parth-react-color.herokuapp.com/",
      github: "https://github.com/parthpatel6347/react-color-palette",
    },
    project2: {
      background: bg3,
      name: "List App",
      description: "An extensive to-do app.",
      used: "React w/hooks, context API, Material UI",
      thumb: todoThumb,
      link: "https://parthpatel6347.github.io/react-hooks-todo-app/",
      github: "https://github.com/parthpatel6347/react-hooks-todo-app",
    },
    project3: {
      background: bg1,
      name: "streetCourts",
      description: "Find and list public ball courts.",
      used: "NodeJs, Express, Bootstrap, MongoDB",
      thumb: streetCourtsThumb,
      link: "https://limitless-spire-35310.herokuapp.com/",
      github: "https://github.com/parthpatel6347/streetCourts",
    },
  };
  const classes = useStlyes();
  return (
    <div className={classes.root}>
      <div className={classes.divider}>
        <h1>Projects</h1>
        <div className={classes.line}></div>
      </div>

      <div className={classes.container}>
        <ProjectCard {...projectsData.project1} />
        <ProjectCard {...projectsData.project2} />
        <ProjectCard {...projectsData.project3} />
      </div>
    </div>
  );
}

export default Projects;
