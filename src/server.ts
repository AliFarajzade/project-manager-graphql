import { createServer } from 'http'
import app from './app'
import { PORT } from './helpers/vars.helper'

const httpServer = createServer(app)

httpServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
