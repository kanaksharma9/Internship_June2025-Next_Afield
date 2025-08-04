import config from './../config/config';
import app from './express';
import mongoose from 'mongoose';

let mongoUri = 'mongodb+srv://kanaksh84:z5HKh8gw1BMEjN9E@cluster0.kx4spci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.listen(config.port, (err) =>{
    if (err){
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri) 

mongoose.connection.on('error', ()=>{
    throw new Error(`Unable to connect to database: ${mongoUri}`)
})