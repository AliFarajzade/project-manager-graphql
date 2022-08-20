import dotenv from 'dotenv'

dotenv.config({
    path: `${__dirname}/../../.env`,
})

const PORT = process.env.PORT || 7777
const nodeEnviroment = process.env.NODE_ENV || 'development'

export { PORT, nodeEnviroment }
