import {Router} from 'express'
import prisma from './db';

const router = Router()

router.delete('/:id', async (req, res) => {
  const deleted = await prisma.jobs.delete({
    where: {
      JobID: req.params.id,
    }
  })
  res.json({message: deleted})
})
router.get("/me", async (req,res) => {
  // @ts-ignore 
  res.json({message: req.user})
})
router.get("/check", (req,res) => {
  res.json({message: "good"})
})
router.post('/', async (req, res) => {
  try{  
    const job = await prisma.jobs.create({
      data: {
        company: req.body.item['company'],
        post: req.body.item['post'],
        phone_num: req.body.item['phone_num'],
        email: req.body.item['email'],
        // @ts-ignore 
        belongsToId: req.user.id
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