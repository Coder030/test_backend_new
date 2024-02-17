import {Router} from 'express'

const jobs: string[] = [];
const router = Router()

router.get('/full', (req, res) => {
  res.json(jobs)
})

router.post('/', (req, res) => {
  jobs.push(req.body.item) // add the object in the list
  console.log(jobs);
  res.json(jobs)
})

export default router