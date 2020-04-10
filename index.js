const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/BEAT-IT'));

app.get('/', (req, res) => res.sendFile(path.join(__dirnmae + '/BEAT-IT/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))