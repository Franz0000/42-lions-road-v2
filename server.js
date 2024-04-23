const express = require("express");
const app = express()
const path = require("path")
const PORT = 9000


// app.get('/', (req, res) =>{
//     res.send('Server is running successfully')
// })

app.use(express.static(path.join(__dirname, '42-lions-road', 'build')))

app.listen(PORT, () => {
    console.log(`Seb Server Running on port ${PORT}`)
})