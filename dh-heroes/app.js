const express = require("express")
const app = express()
const port = 3030

app.get("/", (req, res)=>{
    res.send("Hola Mundo")
})

app.listen(port, () => {
    console.log(`Ejemplo app escuchando at http://localhost:${port}`)
})