import express from "express"
import cors from 'cors'
const cookieParser =  require('cookie-parser')

const jobs: string[] = [];
export const app = express()
let name2;
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  console.log('hello from express!');
  res.json({message: 'this is GET /'})
})

app.use('/api', () =>{
  cookieParser()
})
app.get('/make_cookie', (req, res) => {
  name2 = req.body.name
  res.cookie(name2, 'cookie_value')
})
app.post('/get_cookie', (req, res) => {
  console.log(req.cookies.name2);
  name2 = req.body.name
  res.send(req.cookies.name2)
})

app.get('/api/full', (req, res) => {
  res.json(jobs)
})

app.post('/api', (req, res) => {
  jobs.push(req.body.item) // add the object in the list
  console.log(jobs);
  res.json(jobs)
})
