import React from "react";
import ProjectCard from "./ProjectCard";
import { makeStyles } from "@material-ui/core/styles";
import bg1 from "./styles/imgs/bg1.png";
import bg2 from "./styles/imgs/bg2.png";
import bg3 from "./styles/imgs/bg3.png";
import bg4 from "./styles/imgs/bg4.png";
import bg5 from "./styles/imgs/bg5.png";
import bg6 from "./styles/imgs/bg6.png";

const useStlyes = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "100px",
  },
});

function Projects(props) {
  const projectsData = {
    project1: {
      background: bg2,
      name: "colorPalette",
      description: "Create and save beautiful color palettes.",
      used: "HTML, CSS in JS, JS, React, Material UI",
      thumb: "",
      link: "https://parth-react-color.herokuapp.com/",
      github: "https://github.com/parthpatel6347/react-color-palette",
    },
  };
  const classes = useStlyes();
  return (
    <div className={classes.root}>
      <ProjectCard {...projectsData.project1} />
    </div>
  );
}

export default Projects;
