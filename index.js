express = require('express')

app = express()
require("dotenv").config();
port = 3000

// app.get('/',(req, res) => {
//     res.send("Hello")
// })
//
//
// app.listen(port, () => {
//     console.log("Ok!!!")
// })
console.log(process.env.DB_PASS)