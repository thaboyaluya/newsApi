const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

process.on('uncaughtException',err=>{
    console.log(err.name,err.message)
    console.log('UNHANDLED REJECTION! Shutting down...')
        process.exit(1);
})

const app=require('./app')




const port=process.env.PORT || 3000
const server=app.listen(port,()=>{
    console.log(`You currently in ${process.env.NODE_ENV} mode.`)
    console.log(`App is running on ${port}...`)
})



process.on('unhandledRejection',err=>{
    console.log(err.name,err.message)
    console.log('UNHANDLED REJECTION! Shutting down...')
    server.close(()=>{
        process.exit(1);
    })
})

