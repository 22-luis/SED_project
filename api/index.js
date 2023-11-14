const express = require('express')
const app = express()
const port = process.env.port ?? 3000

app.disable('x-powered-by')
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'Hello' })
});

app.get('/report', (req, res) => {
    res.json({ message: 'Here the reports...maybe' })
});

app.post('/forms', (req, res) => {
    //save in database
    res.status(201).json(req.body)
});

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
    console.log(`The app listening on port http://localhost:${port}`)
})