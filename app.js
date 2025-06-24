const express=require('express')
const morgan=require('morgan')
const rateLimit=require('express-rate-limit')
const helmet=require('helmet')
const xss=require('xss-clean')
const cors=require('cors')


const newRouter=require('./routes/newRoutes')
const AppError=require('./utils/appError')
const errorHandler=require('./controllers/errorController')




const app=express();



app.set('trust proxy', 10 /* number of proxies between user and server */)
app.get('/ip', (request, response) => response.send(request.ip))
app.get('/',(req,res)=>{
    res.status(200).json({
        status:'success',
        message:'hello from server'
    })
})

app.use(helmet())
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
const limiter=rateLimit({
    max:300,
    windowMs:60*60*1000,
    message:'Too many request from this IP,please try again in an hour!'
})
app.use(cors())


app.use('/api',limiter)

app.use(express.json({limit:'10kb'}))
app.use(xss())

app.use((req,res,next)=>{
    console.log('Hello from the middleware !!!')
    next()
})



app.use('/api/v1/news',newRouter)


app.all('*',(req,res,next)=>{
next(new AppError(`Can't find ${req.originalUrl} on this server !`,404))
})
 
app.use(errorHandler)

module.exports=app