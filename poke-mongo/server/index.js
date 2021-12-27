<<<<<<< HEAD
const express = require ('express')
const app = express ()
const port = 8000
app.listen (port , ()=> {
    console.log('listening in port 8000') 

})

=======
const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/api/pokemon",(req,res) => {
    res.status(200).send("Fetching...")
})



app.listen(8000, () => {
    console.log("started listening for resquests on port 8000");
})
>>>>>>> 862e7dd24e2e0a102628e48e267ab655008e1934
