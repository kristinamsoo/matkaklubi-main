
const {MongoClient}=require("mongodb")
const andmebaas = "matka-app-2111"
const salasona = "mongoDB1"
const mongoUrl = `mongodb+srv://matkaapp:${salasona}@cluster0.inzot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const client = new MongoClient(mongoUrl);

const uudis1 = {
   nimetus: "Avasta sügisesed rabarajad",
   pildiUrl: "/assets/raba1.jpg",
   kirjeldus: "Sügisene raba on matkajaile tõeline pärl. Soomaal toimunud matk viib osalejad läbi laugaste ja männimetsade, pakkudes rahu ja kauneid vaateid.",
  
}
const uudis2 = {
   nimetus: "Jõematk süstadel",
   pildiUrl: "/assets/matkaklubi2.jpg",
   kirjeldus: "Uue matkahooaja avamatk: Matkaklubi kutsub kõiki loodushuvilisi uue hooaja avamatkale! Tule avasta ärkavat loodust, naudi värsket õhku ja mõnusat seltskonda. Marsruut on jõukohane kõigile."

}
const uudis3 = {
   nimetus: "Uued mägimatkarajad",
   pildiUrl: "/assets/matkaklubi3.jpg",
   kirjeldus: "Uued mägimatkarajad ja siinsed loodusrikkused. Tutvu kauni loodusega ja taimestikuga",
}
const uudis4 = {
   nimetus: "Uued matkad peredele",
   pildiUrl: "/assets/matkaklubi2.jpg",
   kirjeldus: "Matkaklubi kutsub peresid ühisele looduspäevale! Matka käigus õpime tundma metsataimi, otsime loomade jälgi ja peame piknikku.",
  
}
const uudis5 = {
   nimetus: "Alustame uute sügismatkade sarjaga",
   pildiUrl: "/assets/matkaklubi3.jpg",
   kirjeldus: "Värvide mäng rabamaastikul. Sügis on Eesti looduses maagiline aeg! Matkame läbi kuldsete lehtede ja hommikuse udu, nautides sügise parimaid vaateid.",
}
const uudis6 = {
   nimetus: "Seiklusmatk ekstreemsema elamuse otsijatele",
   pildiUrl: "/assets/matkaklubi2.jpg",
   kirjeldus: "Adrenaliini ja katsumusi otsivad matkajad, see üritus on teile! Rada sisaldab tehnilisi tõuse ja looduslikke takistusi. Vajalik on hea füüsiline vorm.",
  
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
   uudis2,
   uudis3,
   uudis4,
   uudis5,
   uudis6
 ]

 const sonumid = []

/*  function lisaUudis({nimetus, kirjeldus}) {
 uudised.push({nimetus, kirjeldus})
 } */

/*  function loeUudisedAndmed() {
   return uudised
 } */

function lisaMatk ({nimetus, kirjeldus}) {
   matkad.push({nimetus,kirjeldus})
}
  
 async function lisaMatk(matk) {

   try {
      await client.connect();
      const database = client.db(andmebaas);
      const matkad = database.collection("matkad");
      const result = await matkad.insertOne(Matk)
      console.log(`A document was inserted with the _id: ${result.insertedId}`)
    } finally {
      await client.close();
    }
   
   
}

 function loeMatkadeAndmed() {
   return matkad
 }


 function lisaSonum({nimi, sonum}) {
   sonumid.push({nimi, sonum})
}

function loeSonumid() {
   return sonumid
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
   lisaSonum,
   loeSonumid,
   loeUudisedAndmed,
   lisaMatk
  
 }