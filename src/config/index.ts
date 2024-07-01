import dotenv from 'dotenv';
import path from 'path';
export interface IConfig{
  PORT : string
}
const envInit = dotenv.config(({
  path: path.resolve(__dirname,'..','env',`.env.${process.env.environment}`)
}));

if(envInit.error){
  throw envInit.error
}

const Config : IConfig ={
  PORT : process.env.PORT as string
}

export default Config
