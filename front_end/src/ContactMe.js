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
    [sizes.widthDown("sm")]: {
      width: "95%",
      borderTopLeftRadius: "35px",
      borderTopRightRadius: "35px",
      marginTop: "-190px",
    },
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    gridGap: "75px",
    justifySelf: "center",
    [sizes.widthDown("l")]: {
      gridTemplateColumns: "1fr",
      gridGap: "15px",
    },
  },
  formContainer: {
    fontFamily: "'Karla', sans-serif;",
    boxSizing: "border-box",
    backgroundColor: "#E9FAFF",
    borderRadius: "30px",
    // backdropFilter: "blur(15px)",
    boxShadow:
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
    padding: "30px",
    width: "400px",
    [sizes.widthDown("xs")]: {
      borderRadius: "30px",
      width: "78%",
      padding: "25px",
    },
    "& h1": {
      margin: "0",
      textAlign: "center",
      fontWeight: "400",
      [sizes.widthDown("sm")]: {
        fontSize: "26px",
        margin: "0",
        fontWeight: "400",
      },
    },
  },
  input: {
    width: "100%",
    marginTop: "30px",
    [sizes.widthDown("sm")]: {
      marginTop: "25px",
    },
  },
  button: {
    borderRadius: "15px",
    width: "85px",
    height: "30px",
    backgroundColor: "rgba(57,104,226,1)",
    marginRight: "10px",
    [sizes.widthDown("sm")]: {
      height: "35px",
      borderRadius: "18px",
    },

    "& span": {
      fontSize: "14px",
      color: "white",
      textTransform: "none",
      fontFamily: "'Karla', sans-serif;",
      textDecoration: "none",
      [sizes.widthDown("sm")]: {
        fontSize: "16px",
      },
    },
  },
  info: {
    alignSelf: "end",
    color: "white",
    marginLeft: "13%",
    [sizes.widthDown("l")]: {
      textAlign: "center",
      margin: "0",
    },
    "& p": {
      marginBottom: "8px",
      fontFamily: "'Karla', sans-serif;",
      fontWeight: "300",
      letterSpacing: "2px",
      textShadow: "2px 2px 0px rgba(0,0,0,0.3)",
      [sizes.widthDown("sm")]: {
        textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
        marginBottom: "0px",
        fontWeight: "500",
      },
    },
  },
  infoLink: {
    marginLeft: "-12px",
    marginRight: "12px",
    [sizes.widthDown("sm")]: {
      margin: "0",
    },
    "&:hover": {
      backgroundColor: "unset",
      "& i": {
        opacity: "1",
      },
    },
    "& i": {
      textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
      color: "white",
      fontSize: "20px",
      opacity: ".8",
    },
  },
  btnContainer: {
    width: "100%",
    marginTop: "25px",
    display: "flex",
    alignItems: "center",
    [sizes.widthDown("sm")]: {
      justifyContent: "center",
      marginTop: "25px",
    },
  },
  divider: {
    justifySelf: "center",
    display: "flex",
    alignItems: "center",
    marginBottom: "200px",
    marginTop: "10px",
    [sizes.large()]: {
      marginBottom: "100px",
    },
    [sizes.widthDown("sm")]: {
      marginBottom: "150px",
      flexDirection: "column",
      width: "100%",
      paddingLeft: "5%",
      paddingRight: "5%",
      boxSizing: "border-box",
    },
    "& h1": {
      margin: "0",
      color: "white",
      fontFamily: "'Karla', sans-serif;",
      fontWeight: "300",
      letterSpacing: "8px",
      fontSize: "20px",
      textTransform: "uppercase",
      [sizes.widthDown("sm")]: {
        letterSpacing: "6px",
        fontSize: "20px",
        textTransform: "uppercase",
        fontWeight: "400",
        marginBottom: "10px",
        alignSelf: "flex-start",
      },
    },
  },
  line: {
    marginLeft: "10px",
    height: "4px",
    width: "500px",
    backgroundImage: "linear-gradient( 135deg, #699AB8 10%, #7e69b8 100%)",
    [sizes.widthDown("sm")]: {
      width: "100%",
      marginTop: "2px",
      marginLeft: "0",
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
    let response = await fetch("/contact", {
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
          Designed and Built by Parth Patel
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
            size="small"
          />
          <TextField
            className={classes.input}
            id="email"
            label="Email"
            value={content.email}
            onChange={handleChange}
            variant="outlined"
            size="small"
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
            size="small"
          />
          <div className={classes.btnContainer}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disableRipple
              onClick={handleSubmit}
              disabled={status === "Sending..."}
            >
              <span>Send</span>
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
