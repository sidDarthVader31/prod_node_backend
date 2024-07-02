import 'reflect-metadata';
import express from 'express';
import initRoute from './routes';
import { useContainer } from 'routing-controllers';
import Container from 'typedi';
const app = express();
useContainer(Container)
initRoute(app);
app.get('/', (_,res)=>{
  res.send('hello')
}
)
export default app;
