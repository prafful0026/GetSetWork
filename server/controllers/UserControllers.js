import User from "../models/UserModel.js";
import Freelancer from "../models/FreelancerModel.js";
import pkg from 'validator';
const { isEmail } = pkg;
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import generateJwt from "../utils/generateJwt.js"

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );
    if (!user) return res.status(401).send("Invalid credentials");

    const isPasssword = await bcrypt.compare(password, user.password);

    if (!isPasssword) return res.status(401).send("Invalid credentials");

   res.status(200).json(generateJwt(user.log_id))
    
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
};

const signup = async (req, res) => {
  try {
    const { email, name, password, role ,skills} = req.body;

    if (!isEmail(email)) return res.status(401).send("Invalid email.");

    if (password.length < 6)
      return res.status(401).send("Password must be atleast 6 characters.");

    let user =await User.findOne({ email: email });

    if (user) return res.status(400).send("Email id already registered.");

    user=new User({
        email: email.toLowerCase(),
        password,
        name,
        role
    })
    user.password = await bcrypt.hash(password, 10);
    await user.save();
    if (role === "freelancer") {
        const freelancer=new Freelancer({
            user:user._id,
            skills
        })
        await freelancer.save()
    }
    res.status(200).json(generateJwt(user.log_id))
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error.");
  }
};

export {signup,login}