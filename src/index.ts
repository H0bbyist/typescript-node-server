import express from 'express'

const app = express()
const port = 9000

app.get('/', (req, res) => {
    res.send('its alive!')
})

app.get('/test', (req, res) => {
    res.send('its testing alive!')
})

app.listen(port, () => {
    return console.log(`server is listening on port ${port}`)
})