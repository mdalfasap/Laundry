import nodemailer from "nodemailer";

export async function register(req, res) {
  try {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const message = {
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
      to: "bar@example.com, baz@example.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    };

    transporter
      .sendMail(message)
      .then((info) => {
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        return res.status(201).json({
          msg: "You should receive an email",
          info: info.messageId,
          preview: nodemailer.getTestMessageUrl(info),
        });
      })
      .catch((error) => {
        console.error("Error occurred: ", error);
        return res.status(500).json({ error });
      });
  } catch (error) {
    console.error("Error occurred: ", error);
    return res.status(500).json({ error });
  }
}
