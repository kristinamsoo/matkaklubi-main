const {loeMatkadeAndmed, lisaOsaleja} = require("../data")

const naitaMatkad  = (req, res) => {
    const matkad = loeMatkadeAndmed()
    console.log(matkad)
    res.render("pages/index", {matkad: matkad})
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
 
 module.exports = {
    naitaMatkad,
    registreeriOsaleja,
    naitaMatka,
    naitaKontakt

   
    
   
 }

