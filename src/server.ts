import express from "express"
import cors from 'cors'
// const cookieParser =  require('cookie-parser')
import cookieParser from 'cookie-parser'

const jobs: string[] = [];
export const app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  console.log('hello from express!');
  res.json({message: 'this is GET /'})
})

app.use(cookieParser())
app.post('/make_cookie', (req, res) => {
  const name2 = req.body.name  
  return res.cookie(name2, name2).json({ success: true, message: "Success, new user created!"})
})
app.post('/get_cookie', (req, res) => {
  console.log(req.cookies);
  
  const name2 = req.body.name
  const cookie = req.cookies[name2]
  if (cookie === undefined){
    res.json("Sorry, we couldn't find the cookie")
  }
  else {
    res.send(cookie)
  }
})

app.get('/api/full', (req, res) => {
  res.json(jobs)
})

app.post('/api', (req, res) => {
  jobs.push(req.body.item) // add the object in the list
  console.log(jobs);
  res.json(jobs)
})
