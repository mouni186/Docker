const express = require('express');
const app = express();
const cors = require('cors');



app.use(cors());



app.get('/',(req,res) => {
    res.json([
        {
            "id":"1",
            "title":"THe bear...&"
        },
        {
            "id":"2",
            "title":"Pokemon...&"
        }
    ])
})





const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port`)
})