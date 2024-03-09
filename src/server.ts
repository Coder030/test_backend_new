import express from "express"
import cors from 'cors'
import router from "./router";
import prisma from './db';
// const cookieParser =  require('cookie-parser')
import cookieParser from 'cookie-parser'
import { protect } from "./auth";
import { createNewUser, signin } from "./user";


export const app = express()
const corsOptions = {
  credentials: true,
  origin: ['https://job-poster-seven.vercel.app', 'http://localhost:3000', 'http://localhost:3001'],
};

app.use(cors(corsOptions));
app.use(express.json())

//don't look at this
app.get('/', (req, res) => {
  console.log('hello from express!');
  res.json({message: 'this is GET /'})
  
})

app.get('/full', async (req, res) => {
  try {
    const jobs = await prisma.jobs.findMany();
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//this is the main things
app.use(cookieParser())

//protected routes for frontend
app.use('/api', protect, router)

//these are for log/sign in 
app.post('/make_cookie',createNewUser);
app.post('/get_cookie', signin)

