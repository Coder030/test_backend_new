import {Router} from 'express'
import prisma from './db';

const router = Router()

//this all is easy
router.get('/full', async (req, res) => {
  const jobs = await prisma.jobs.findMany()
  res.json(jobs)
})

router.post('/', async (req, res) => {
  try{
    const job = await prisma.jobs.create({
      data: {
        company: req.body.item['company'],
        post: req.body.item['post'],
        phone_num: req.body.item['phone_num'],
        email: req.body.item['email']
      }
    })
    res.json({message: job})
  } catch(e){
    res.json({data: "nope"})
    console.log("nope");
    
  }
}
)

export default router