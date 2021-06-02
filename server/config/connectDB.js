import mongoose from 'mongoose'

const connectDB= async()=>{
    try{
        const connect =await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`connected mongo ${connect.connection.host}`)
    }
    catch(error){
             console.log(`error:${error.message}`)
             process.exit(1)
    }    
}

export default connectDB