const express = require('express');
var app = express()
const port = 3001

app.listen(port,()=>
    console.log("listen port 3001")
)

const tempRoute = require('./routers/temp');

app.use('temp',tempRoute)