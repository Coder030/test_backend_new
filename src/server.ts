import express from "express"
import cors from 'cors'

const job: string[] = [];
export const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  console.log('hello from express!');
  res.json({message: 'this is GET /'})
})
app.get('/full', (req, res) => {
  res.json(job)
})

app.post('/', (req, res) => {
  job.push(req.body.item) // add the object in the list
  console.log(job);
  res.json(job)
})