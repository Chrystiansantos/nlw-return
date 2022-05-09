import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors({
  origin: 'https://nlw-return-two-indol.vercel.app/'
}))
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log('Http server running 🔥')
})
