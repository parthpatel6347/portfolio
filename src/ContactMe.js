import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import contactBG from "./styles/imgs/contactBG.svg";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStlyes = makeStyles({
  root: {
    width: "100%",
    overflowX: "hidden",
    paddingTop: "400px",
    backgroundImage: `url(${contactBG})`,
    backgroundSize: "105%",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: "200px",
  },
  formContainer: {
    fontFamily: "'Karla', sans-serif;",
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,.6)",
    borderRadius: "30px",
    backdropFilter: "blur(15px)",
    width: "450px",
    padding: "50px",
    "& h1": {
      margin: "0 0 10px 0",
      textAlign: "center",
      fontWeight: "400",
    },
  },
  input: {
    width: "100%",
    marginTop: "30px",
  },
  button: {
    marginTop: "30px",
    borderRadius: "25px",
    width: "90px",
  },
  info: {
    color: "white",
    marginLeft: "13%",
    "& p": {
      fontFamily: "'Karla', sans-serif;",
      fontWeight: "300",
      letterSpacing: "2px",
    },
    "& i": {
      marginRight: "25px",
      fontSize: "24px",
    },
  },
});

function ContactMe(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const classes = useStlyes();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <h1>Drop a message</h1>
        <TextField
          className={classes.input}
          id="name"
          label="Name"
          value={name}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.input}
          id="email"
          label="Email"
          value={email}
          onChange={handleEmail}
          variant="outlined"
        />
        <TextField
          className={classes.input}
          id="message"
          label="Message"
          multiline
          rows={4}
          rowsMax={4}
          value={message}
          onChange={handleMessage}
          variant="outlined"
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          disableRipple
        >
          Send
        </Button>
      </div>
      <div className={classes.info}>
        <p>parthpalel6347@gmail.com</p>
        <i class="bi bi-envelope"></i>
        <i class="bi bi-twitter"></i>

        <i class="bi bi-linkedin"></i>
      </div>
    </div>
  );
}

export default ContactMe;
