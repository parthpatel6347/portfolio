import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import contactBG from "./styles/imgs/contactBG.svg";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

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
    borderRadius: "25px",
    width: "90px",
    marginRight: "10px",
  },
  info: {
    color: "white",
    marginLeft: "13%",
    "& p": {
      marginBottom: "8px",
      fontFamily: "'Karla', sans-serif;",
      fontWeight: "300",
      letterSpacing: "2px",
    },
  },
  infoLink: {
    marginLeft: "-12px",
    marginRight: "12px",
    "&:hover": {
      backgroundColor: "unset",
      "& i": {
        opacity: "1",
      },
    },
    "& i": {
      color: "white",
      fontSize: "20px",
      opacity: ".8",
    },
  },
  btnContainer: {
    marginTop: "25px",
    display: "flex",
    alignItems: "center",
  },
});

function ContactMe(props) {
  const [content, setContent] = useState({});
  const [status, setStatus] = useState("Sent");
  const [showStatus, setShowStatus] = useState(false);

  const classes = useStlyes();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setShowStatus(true);
    let details = {
      ...content,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Sent");
    setTimeout(() => setShowStatus(false), 2000);
    let result = await response.json();
    // alert(result.status);

    setContent({ name: "", email: "", message: "" });
  };

  const handleChange = (event) => {
    setContent({ ...content, [event.target.id]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <h1>Drop a message</h1>
        <TextField
          className={classes.input}
          id="name"
          label="Name"
          value={content.name}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.input}
          id="email"
          label="Email"
          value={content.email}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.input}
          id="message"
          label="Message"
          multiline
          rows={4}
          rowsMax={4}
          value={content.message}
          onChange={handleChange}
          variant="outlined"
        />
        <div className={classes.btnContainer}>
          {" "}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disableRipple
            onClick={handleSubmit}
            disabled={status === "Sending..."}
          >
            Send
          </Button>
          {showStatus && <span>{status}</span>}
          {(status === "Sent") & showStatus ? (
            <i
              className="bi bi-check"
              style={{ color: "green", fontSize: "25px" }}
            ></i>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={classes.info}>
        <p>parthpalel6347@gmail.com</p>
        <IconButton
          disableRipple
          className={classes.infoLink}
          href="mailto:parthpatel6347@gmail.com"
        >
          <i class="bi bi-envelope"></i>
        </IconButton>
        <IconButton
          disableRipple
          className={classes.infoLink}
          href="https://twitter.com/parth6347"
          target="_blank"
        >
          <i class="bi bi-twitter"></i>
        </IconButton>

        <IconButton disableRipple className={classes.infoLink} href="">
          <i class="bi bi-linkedin"></i>
        </IconButton>
      </div>
    </div>
  );
}

export default ContactMe;
