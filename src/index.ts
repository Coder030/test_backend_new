// const app = require("./server.js")
import { app } from "./server";
import * as dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
  console.log('hello on http://localhost:' + PORT);
  
})