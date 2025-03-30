const catchAsync=require('../utils/catchAsync')
const axios=require('axios')
const NodeCache = require( "node-cache" );
const myCache = new NodeCache({stdTTL:1800});




exports.getAllNews=(req,res)=>{
    res.status(200).json({
        status:'success',
        message:'Hello from the sever'
    })
}

exports.getAllGuardian=catchAsync(async(req,res,next)=>{
    const options = {
        method: 'GET',
        url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/theguardian',
        headers: {
          'x-rapidapi-key': process.env.RAPID_API_KEY,
          'x-rapidapi-host': process.env.RAPID_API_HOST
        }
      };
      const cacheKey='guardian'
      const cacheData=myCache.get(cacheKey)
      console.log(cacheData)

      if(cacheData){
        console.log('Getting data from cache....')
        return res.status(200).json({
          status:'success',
          results:myCache.get(cacheKey).length,
          data:myCache.get(cacheKey)
      })
      }

        const response = await axios.request(options);
        const news=response.data.data
        myCache.set(cacheKey,news)
        console.log('Getting data from Api....')
      res.status(200).json({
          status:'success',
          results:news.length,
          data:news
      })



})

exports.getAllCryptoDaily=catchAsync(async(req,res,next)=>{
    const options = {
        method: 'GET',
        url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily',
        headers: {
          'x-rapidapi-key': process.env.RAPID_API_KEY,
          'x-rapidapi-host': process.env.RAPID_API_HOST
        }
      };

      const cacheKey='crypto'
      const cacheData=myCache.get(cacheKey)

      if(cacheData){
        console.log('Getting data from cache....')
        return res.status(200).json({
          status:'success',
          results:myCache.get(cacheKey).length,
          data:myCache.get(cacheKey)
      })
      }

        const response = await axios.request(options);
        const news=response.data.data
        myCache.set(cacheKey,news)
        console.log('Getting data from Api....')
      res.status(200).json({
          status:'success',
          results:news.length,
          data:news
      })




})

exports.getAllBSCNews=catchAsync(async(req,res,next)=>{
    const options = {
        method: 'GET',
        url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/bsc',
        headers: {
          'x-rapidapi-key': process.env.RAPID_API_KEY,
          'x-rapidapi-host': process.env.RAPID_API_HOST
        }
      };

      const cacheKey='bsc'
      const cacheData=myCache.get(cacheKey)

      if(cacheData){
        console.log('Getting data from cache....')
        return res.status(200).json({
          status:'success',
          results:myCache.get(cacheKey).length,
          data:myCache.get(cacheKey)
      })
      }

        const response = await axios.request(options);
        const news=response.data.data
        myCache.set(cacheKey,news)
        console.log('Getting data from Api....')
      res.status(200).json({
          status:'success',
          results:news.length,
          data:news
      })

})

exports.getAllBitcoinNews=catchAsync(async(req,res,next)=>{
    const options = {
        method: 'GET',
        url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/bitcoinist',
        headers: {
          'x-rapidapi-key': process.env.RAPID_API_KEY,
          'x-rapidapi-host': process.env.RAPID_API_HOST
        }
      };


      const cacheKey='crypto'
      const cacheData=myCache.get(cacheKey)

      if(cacheData){
        console.log('Getting data from cache....')
        return res.status(200).json({
          status:'success',
          results:myCache.get(cacheKey).length,
          data:myCache.get(cacheKey)
      })
      }

        const response = await axios.request(options);
        const news=response.data.data
        myCache.set(cacheKey,news)
        console.log('Getting data from Api....')
      res.status(200).json({
          status:'success',
          results:news.length,
          data:news
      })


})

exports.getAllBitcoinNews=catchAsync(async(req,res,next)=>{
    const options = {
        method: 'GET',
        url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/bitcoinist',
        headers: {
          'x-rapidapi-key': process.env.RAPID_API_KEY,
          'x-rapidapi-host': process.env.RAPID_API_HOST
        }
      };
 

      const cacheKey='bitcoin'
      const cacheData=myCache.get(cacheKey)

      if(cacheData){
        console.log('Getting data from cache....')
        return res.status(200).json({
          status:'success',
          results:myCache.get(cacheKey).length,
          data:myCache.get(cacheKey)
      })
      }

        const response = await axios.request(options);
        const news=response.data.data
        myCache.set(cacheKey,news)
        console.log('Getting data from Api....')
      res.status(200).json({
          status:'success',
          results:news.length,
          data:news
      })



})


exports.getAllCoinTelegraph=catchAsync(async(req,res,next)=>{
    const options = {
        method: 'GET',
        url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/cointelegraph',
        headers: {
          'x-rapidapi-key': process.env.RAPID_API_KEY,
          'x-rapidapi-host': process.env.RAPID_API_HOST
        }
      };
 

      const cacheKey='cointelegraph'
      const cacheData=myCache.get(cacheKey)

      if(cacheData){
        console.log('Getting data from cache....')
        return res.status(200).json({
          status:'success',
          results:myCache.get(cacheKey).length,
          data:myCache.get(cacheKey)
      })
      }

        const response = await axios.request(options);
        const news=response.data.data
        myCache.set(cacheKey,news)
        console.log('Getting data from Api....')
      res.status(200).json({
          status:'success',
          results:news.length,
          data:news
      })

})



exports.getAllDecrypt=catchAsync(async(req,res,next)=>{
    const options = {
        method: 'GET',
        url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/decrypt',
        headers: {
          'x-rapidapi-key': process.env.RAPID_API_KEY,
          'x-rapidapi-host': process.env.RAPID_API_HOST
        }
      };


      const cacheKey='decrypt'
      const cacheData=myCache.get(cacheKey)

      if(cacheData){
        console.log('Getting data from cache....')
        return res.status(200).json({
          status:'success',
          results:myCache.get(cacheKey).length,
          data:myCache.get(cacheKey)
      })
      }

        const response = await axios.request(options);
        const news=response.data.data
        myCache.set(cacheKey,news)
        console.log('Getting data from Api....')
      res.status(200).json({
          status:'success',
          results:news.length,
          data:news
      })


})

