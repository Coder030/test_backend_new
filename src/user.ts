import prisma from "./db";
import { createJWT } from "./auth";

export const createNewUser = async (req, res, next) => {
  try{
    console.log("started")
    const user = await prisma.user.create({
      data: {
        username: req.body.name,
      }
    })

    const token = createJWT(user)
    res.json({message: "hello"})
  } catch(e){
    e.type = 'input'
    next(e)
  }
}
export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.name,
    }
  })

 if(!user){
  req.json({data: "nf"})
 }
 else{
  res.json({message: "A cookie named " + req.body.username + " has been found"})
 }
}