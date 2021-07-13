import express from 'express';
import Route from './routes'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(Route)

app.listen(PORT, () => {
	console.log(`ruanning server in port ${PORT}`);
})