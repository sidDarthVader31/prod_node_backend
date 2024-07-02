import 'reflect-metadata';
import app from './app'
import Config from './config/index'; 
const PORT = Config.PORT;
app.listen(PORT,()=>{
    console.log(`server started successfully ON PORT:${PORT}`);
})
.on('error', (e: string)=>{
    throw new Error(e);
});
