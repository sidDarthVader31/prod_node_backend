import 'reflect-metadata';
import express from 'express';
import initRoute from './routes';
const app = express();

initRoute(app);
app.get('/', (_,res)=>{
  res.send('hello')
}
)
export default app;
