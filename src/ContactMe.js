import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import sizes from "./styles/sizes";

const useStlyes = makeStyles({
  root: {
    width: "100%",
    overflowX: "hidden",
    display: "grid",
  },
  background: {
    background:
      "linear-gradient(157deg, rgba(70,181,223,1) 0%, rgba(57,104,226,1) 48%, rgba(167,42,205,1) 100%)",
    gridRow: "3",
    height: "350px",
    width: "98%",
    justifySelf: "center",
    marginTop: "-150px",
    borderTopLeftRadius: "45px",
    borderTopRightRadius: "45px",
    display: "grid",
    justifyContent: "center",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    gridGap: "75px",
    justifySelf: "center",
  },
  formContainer: {
    fontFamily: "'Karla', sans-serif;",
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: "30px",
    // backdropFilter: "blur(15px)",
    width: "450px",
    padding: "40px",
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
    backgroundColor: "rgba(57,104,226,1)",
    borderRadius: "25px",
    width: "90px",
    marginRight: "10px",
  },
  info: {
    alignSelf: "end",
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
  divider: {
    justifySelf: "center",
    display: "flex",
    alignItems: "center",
    marginBottom: "100px",
    marginTop: "50px",
    [sizes.widthDown("sm")]: {
      flexDirection: "column",
      width: "100%",
      paddingLeft: "5%",
      paddingRight: "5%",
      boxSizing: "border-box",
    },
    "& h1": {
      color: "white",
      fontFamily: "'Karla', sans-serif;",
      fontWeight: "300",
      letterSpacing: "8px",
      fontSize: "42px",
      [sizes.widthDown("sm")]: {
        letterSpacing: "6px",
        fontSize: "42px",
        textTransform: "uppercase",
        fontWeight: "400",
        marginBottom: "10px",
        alignSelf: "flex-start",
      },
    },
  },
  line: {
    marginTop: "12px",
    marginLeft: "10px",
    height: "4px",
    width: "500px",
    backgroundImage: "linear-gradient( 135deg, #699AB8 10%, #7e69b8 100%)",
    [sizes.widthDown("sm")]: {
      width: "100%",
      marginTop: "2px",
    },
  },
  footer: {
    alignSelf: "end",
    display: "grid",
    fontFamily: "'Karla', sans-serif;",
    justifySelf: "center",
    color: "rgba(255,255,255,0.7)",
    marginBottom: "30px",
    fontSize: "15px",
    fontWeight: "300",
    "& a": {
      marginTop: "10px",
      textAlign: "center",
      textDecoration: "none",
      "&:visited": {
        color: "black",
      },
    },
    "& i": {
      color: "white",
      fontSize: "20px",
      marginLeft: "10px",
      opacity: ".5",
      "&:hover": {
        opacity: "1",
        cursor: "pointer",
      },
    },
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
      <div className={classes.background}>
        <p className={classes.footer}>
          Designed and Built by Parth Patel{" "}
          <a
            href="https://github.com/parthpatel6347/portfolio"
            target="_blank"
            rel="noreferrer"
            title="Go to Github repository"
          >
            <i className="bi bi-github"></i>
          </a>
        </p>
      </div>
      <div className={classes.divider}>
        <h1>Contact</h1>
        <div className={classes.line}></div>
      </div>
      <div className={classes.container}>
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
    </div>
  );
}

export default ContactMe;
