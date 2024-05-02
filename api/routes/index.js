const express = require('express')
const productsRouter = require('./products.router')
const airlineRouter = require('./airlines.router')
const userRouter = require('./users.router')

function routerApi(app){

  const router = express()
  app.use('/api/v1', router);

  router.use('/products', productsRouter)
  router.use('/airline', airlineRouter)
  router.use('/users', userRouter)
}

module.exports = routerApi;
