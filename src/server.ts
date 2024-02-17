import express from "express"
import cors from 'cors'
import router from "./router";
// const cookieParser =  require('cookie-parser')
import cookieParser from 'cookie-parser'
import { protect } from "./auth";
import { createNewUser, signin } from "./user";

export const app = express()
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json())


app.get('/', (req, res) => {
  console.log('hello from express!');
  res.json({message: 'this is GET /'})
})

app.use(cookieParser())
app.use('/api', protect, router)
app.post('/make_cookie',
  // if (name2 in req.cookies) {
  //   console.log(`Username ${name2} already exists. Choosing another username.`);
  //   res.json({data: 'e'})
  // } else {
  //   // Username doesn't exist, set the cookie
  //   res.cookie(name2, name2).json({ success: true, message: "Success, new user created!" });
  // }
  createNewUser);
app.post('/get_cookie', (req, res) => {
  // console.log(req.cookies);
  // const name2 = req.body.name
  // const cookie = req.cookies[name2]
  // console.log(name2, cookie);
  // if (cookie === undefined){
  //   console.log("not valid user")
  //   res.json({data: "nf"})
  // }
  // else {
  //   res.json({message: "A cookie named " + cookie + " has been found"})
  // }
  signin
})

