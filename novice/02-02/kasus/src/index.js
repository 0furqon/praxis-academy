const env = require('dotenv').config()
const fastify = require('fastify')({ logger: true })
const axios = require('axios')
const boom = require('boom')

// Declare a route
fastify.get('/search/:search_query/', async (request, reply) => {
  try {

    if (!process.env.API_KEY){
      return boom.notAcceptable('Api key kosong! Pastikan API_KEY terdefinisi di file .env')
    }

    const movies = await axios.get('https://api.themoviedb.org/3/search/movie?api_key='+ process.env.API_KEY +'&language=en-US&query=' + request.params.search_query + '&page=1&include_adult=false')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      // handle error
      return boom.boomify(error)
    })

    return movies

  } catch (error) {
    console.log(error)
    return boom.boomify(error)
  }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()