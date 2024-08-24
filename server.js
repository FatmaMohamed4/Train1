import express from 'express'
import connectDB from './DBconnect.js'
import newsRoute from './routes/newsRoute.js'
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Traning 1 app is  listening on port ${port}!`))
app.use(express.json());

app.use('/news', newsRoute)
connectDB()