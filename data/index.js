const uudis1 = {
   nimetus: "pealkiri1",
   pildiUrl: "/assets/matkaklubi1.jpeg",
   kirjeldus: "mingi uudis" ,
   infoLink: "/assets/test.html"
}

const uudis2 = {
   nimetus: "pealkiri uus",
   pildiUrl: "/assets/matkaklubi3.jpg",
   kirjeldus: "mingi uudis uudis",
   infoLink: "/assets/test.html"
}

function loeUudisedAndmed(){
   return uudised
 }

const matk1 = {
    nimetus: "Sügismatk Kõrvemaal",
    pildiUrl: "/assets/Hills.png",
    kirjeldus: "Lähme ja oleme kolm päeva looduses",
    osalejad: ["mati@matkaja.ee", "kati@matkaja.ee"]
 }
 
 
 const matk2 = {
    nimetus: "Süstamatk Hiiumaal",
    pildiUrl: "/assets/Hiker.png",
    kirjeldus: "Lähme ja oleme kolm päeva vee peal",
    osalejad: ["mati@matkaja.ee", "kati@matkaja.ee", "uudo@ryhkija.ee"]
 }
 const matk3 = {
   nimetus: "Rabamatk Viru rabas",
   pildiUrl: "/assets/raba1.jpg",
   kirjeldus: "Lähme matkame ühe päeva kaunis rabas",
   osalejad: ["uudo@ryhkija.ee"]

}
 const matkad = [
    matk1,
    matk2,
    matk3,
    {
        nimetus: "Mägimatk Otepääl",
        pildiUrl: "/assets/magi.jpg",
        kirjeldus: "Lähme ja oleme kolm päeva mägedes",
        osalejad: ["uudo@ryhkija.ee"]
   
  }
 ]

 const uudised = [
   uudis1,
   uudis2
 ]


 function loeMatkadeAndmed() {
   return matkad
 }




 function lisaOsaleja(matkaIndeks, osalejaEmail) {
   const matk = matkad[matkaIndeks]
   if (!matk) {
      throw Error("Otsitavat matka ei ole")
   }

   if (!osalejaEmail) {
      throw Error("osaleja email peab olema määratud")
   } 
   
   if (matk.osalejad.findIndex( el => el === osalejaEmail) !== -1) {
      throw Error("Osaleja on juba registreerunud")
   }

   matk.osalejad.push(osalejaEmail)

 }
 module.exports = {
   loeMatkadeAndmed,
   lisaOsaleja,
   loeUudisedAndmed
  
 }