const mailer = require("nodemailer");
const { Hello } = require("./hello_template");
const { Thanks } = require("./thanks_template");

const getEmailData = (to, name, template) => {
  let data = null;

  switch (tamplate) {
    case "hello":
      data = {
        from: "Mohamamd Ahamd <mohammad@gmail.com>",
        to,
        subject: `Hello ${name}`,
        html: Hello(),
      };

      break;

    case "thanks":
      data = {
        from: "Mohamamd Ahamd <mohammad@gmail.com>",
        to,
        subject: `Thanks ${name}`,
        html: Thanks(),
      };

      break;

    default:
      data;
  }

  return data;
};

const sendEmail = (to, name, type) => {
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: "mohammad@gmail.com",
      pass: "12345",
    },
  });
  const mail = getEmailData(to, name, type);

  smtpTransport.sendMail(mail, (error, res) => {
    if (error) {
      console.log(error);
    } else {
      console.log(" email sent seccessfully");
    }
    smtpTransport.close();
  });
};

module.export = { sendEmail };
