// const app = require("./server.js")
import { app } from "./server";

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('hello on http://localhost:' + PORT);
  
})