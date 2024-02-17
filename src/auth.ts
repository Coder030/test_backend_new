import jwt from "jsonwebtoken"


export const createJWT = (user:any) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET!
  );
  return token;
};
export const protect = (req, res, next) => {
  console.log(req.cookies)
  const token = req.cookies["token"]
  try{
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.user = user
    next()
  }catch (e) {
    console.log(e);
    res.status(401)
    res.json({message: 'not valid token'})
    return
    
  }
}