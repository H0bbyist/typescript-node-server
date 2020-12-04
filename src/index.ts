import express from 'express'

const app = express()
const port = 9000

app.get('/', (req, res) => {
    res.status(200)
    res.send('its alive!')
})

app.get('/data', (req, res) => {
    res.send('heres your data')
})

app.listen(port, () => {
    return console.log(`server is listening on port ${port}`)
})