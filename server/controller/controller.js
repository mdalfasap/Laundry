import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import { EMAIL, PASSWORD } from "../env.js";
import UserModel from "../Model/userModel.js";
import bcrypt from "bcryptjs";
import { randomBytes } from "crypto";
import { error } from "console";

export async function register(req, res) {
  try {
    const specialchar = /[!@#$%^&*(),.?":{}|<>]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { email, name, password, confirmPassword } = req.body;
    if (!email) {
      return res.status(400).send({ error: "Please enter email" });
    } else if (!emailRegex.test(email)) {
      return res.status(400).send({ error: "Please enter a valid email" });
    } else if (!name) {
      return res.status(400).send({ error: "Please enter first name" });
    }
    const existEmail = await UserModel.findOne({ email });
    if (existEmail) {
      return res.status(400).send({ error: "Please use a unique email" });
    }

    if (password) {
      if (!specialchar.test(password)) {
        return res.status(400).send({
          error: "Password should contain atleaset one special charector",
        });
      } else if (password.length < 6) {
        return res
          .status(400)
          .send({ error: "Password should be atleast 6 charectors" });
      }
      if (password === confirmPassword) {
        const hashPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({
          email,
          password: hashPassword,
          name,
        });

        await user.save();

        return res
          .status(201)
          .send({ error: false, msg: "User registered successfully" });
      } else {
        return res
          .status(400)
          .send({ error: "Password and confirm password are not same" });
      }
    } else {
      return res.status(400).send({ error: "Password is required" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message || "Internal Server Error" });
  }
}

const sendOtp = async (userEmail) => {
  try {
    // const { userEmail } = req.body;

    // Generate OTP
    const otp = generateOTP(); // Generate 6-digit OTP

    function generateOTP() {
      let otp = "";
      for (let i = 0; i < 4; i++) {
        otp += Math.floor(Math.random() * 10); // Generate a random number between 0 to 9
      }
      return otp;
    }

    let config = {
      service: "gmail",
      auth: {
        user: EMAIL, // Replace with your Gmail email
        pass: PASSWORD, // Replace with your Gmail password
      },
    };

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Laundry",
        link: "https://mailgen.js/",
      },
    });

    let response = {
      body: {
        name: "Welcome",
        intro: `Your OTP is ${otp}`,
        outro: "Please use this OTP to verify your email.",
      },
    };

    let mail = MailGenerator.generate(response);

    let message = {
      from: EMAIL, // Replace with your Gmail email
      to: userEmail,
      subject: "OTP Verification",
      html: mail,
    };

    await transporter.sendMail(message);

    return {
      msg: "OTP has been sent to your email",
      otp: otp,
    };
  } catch (error) {
    console.error("Error occurred: ", error);
    throw new Error("Failed to send OTP");
  }
};

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ error: "please enter email" });
    }
    if (!password) {
      return res.status(400).json({ error: "please enter password" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error:"this email not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "invalid password" });
    }
    sendOtp(email);

    return res.status(201).send({ error: false, msg: "otp send" });
  } catch (error) {}
}

export async function verifyOtp(req, res) {
  try {
    




  } catch (error) {
    console.error("Error in verifyOtp function:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
