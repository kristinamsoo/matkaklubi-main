const {loeMatkadeAndmed, lisaOsaleja, loeUudisedAndmed} = require("../data")

const naitaMatkad  = (req, res) => {
    const matkad = loeMatkadeAndmed()
    console.log(matkad)
    res.render("pages/index", {matkad: matkad})
 }
const naitaUudised  = (req, res) => {
    const uudised = loeUudisedAndmed()
    console.log(uudised)
    res.render("pages/uudised", {uudised: uudised})
 }

 const naitaKontakt = (req, res) => {
   res.render("pages/kontakt")
 }

 const registreeriOsaleja =(req, res) => {
   lisaOsaleja(req.query.matk, req.query.email)
   res.redirect("/matkad")
 }

 const  naitaMatka = (req,res) => {
   const matkad = loeMatkadeAndmed ()
   const matkaIndeks = req.params.id
   const matk = matkad[matkaIndeks]
   res.render("pages/matk", {matk: matk})
   //todo:loo mall matk.ejs ning malli peal kasuta objekti matk (matk.nimetus matk.pildiurl)
   
   res.send(`
      <html>
         <body>
            <h1>
             ${matk.nimetus}
            </h1>
            <div>
               ${matk.kirjeldus}
            <div>
            </body>
      </html>
      `)
   }
 const  naitaUudis = (req,res) => {
   const uudised = loeUudisedAndmed ()
   const uudisIndeks = req.params.id
   const uudis = uudised[uudisIndeks]
   res.render("pages/uudis", {uudis: uudis})

   //todo:loo mall matk.ejs ning malli peal kasuta objekti matk (matk.nimetus matk.pildiurl)
   
   res.send(`
      <html>
         <body>
            <h1>
             ${uudis.nimetus}
            </h1>
            <div>
               ${uudis.kirjeldus}
            <div>
            </body>
      </html>
      `)
   }
 
 module.exports = {
    naitaMatkad,
    registreeriOsaleja,
    naitaMatka,
    naitaKontakt,
    naitaUudis,
    naitaUudised,
    loeUudisedAndmed
   

   
    
   
 }

