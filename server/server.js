const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.use(express.static(path.resolve(__dirname, "../build")));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
// app.use(express.static(path.join(__dirname, '../build')))







const PORT = process.env.PORT || 4006

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
