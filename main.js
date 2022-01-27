console.log("hello");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
// app.use("/", router);
app.use(express.static(path.join(__dirname, "front_end/build")));
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/front_end/build", "index.html"));
});

const contactEmail = nodemailer.createTransport({
  host: 'smtp-relay.sendinblue.com',
  port: 587,
  auth: {
    user: process.env.ID,
    pass: process.env.PASS
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  console.log("posting");
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: `${name} <${email}>`,
    to: process.env.EMAILTO,
    subject: "Message from portfolio site",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  console.log(mail);
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: error });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.listen(PORT, () => console.log("Server Running"));
