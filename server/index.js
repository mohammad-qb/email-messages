const express = require("express");
const bodyPareser = require("body-parser");
const cookieParser = require("cookie-parser");
const { sendEmail } = require("./mail");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyPareser.urlencoded({ extended: true }));
app.use(bodyPareser.json());
app.use(cookieParser());

app.post("api/sendMail", (req, res) => {
  console.log(req.body);
  sendEmail(req.body.email, req.body.name, "hello");
});

app.listen(PORT, () => console.log(`server is running up on PORT = ${PORT}`));
