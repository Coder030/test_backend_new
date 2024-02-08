import express from "express"
import cors from 'cors'

const jobs: string[] = [];
export const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  console.log('hello from express!');
  res.json({message: 'this is GET /'})
})
app.get('/api/full', (req, res) => {
  res.json(jobs)
})

app.post('/api', (req, res) => {
  jobs.push(req.body.item) // add the object in the list
  console.log(jobs);
  res.json(jobs)
})