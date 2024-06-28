import 'reflect-metadata'
import app from './app';
import { Config } from './config';
const PORT = Config.PORT;


app.listen(PORT, ()=>{
  console.log(`Server running on port :${PORT}`)
})
.on('error',(e: string)=>{
    throw new Error(e)
  })
