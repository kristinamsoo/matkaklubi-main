const express = require('express')

const path = require("path")


const {naitaMatkad, naitaMatka, registreeriOsaleja, naitaKontakt, naitaUudised, naitaUudis} = require("./controller")

const app = express();
app.use(express.static("public"))
const PORT = process.env.PORT || 3030

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/test", (req, res) => {
   res.send (`
      <h1>test test</h1>
   `)

})

app.get('/', naitaMatkad)

app.get('/matk/:id', naitaMatka)

app.get('/kontakt', naitaKontakt)

app.get('/uudised', naitaUudised)
app.get('/uudis/:id', naitaUudis)


app.listen(PORT, () => console.log('Matkaklubi töötab pordil' + PORT))
