import jwt from "jsonwebtoken"

//create token and cookie
export const createJWT = (user:any, res, req) => {
  // make a cookie signed by JWT_SECRET
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET!
  );
  //make cookie with name - "token" so I can get the value easily and expires in 3 days
  res.cookie("token", token, {
     httpOnly: true, 
     maxAge: 60 * 60 * 24 * 30 * 6 * 1000,
     sameSite: "none",
     secure: true,
     path: "/"
  })
  console.log(req.cookies);
  
};
export const protect = (req, res, next) => {
  // find the token
  const token = req.cookies["token"]
  console.log(token);
  console.log(req.cookies);
  
  try{
    // verify if there is a token like that or not
    console.log(token);
    
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.user = user
    console.log(user);
    
    next()
  }catch (e) {
    console.log(req.cookies);
    
    console.log(e + "   this is the error!");
    res.json({message: 'nvt'})
    return
    
  }
}