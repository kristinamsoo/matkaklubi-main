const {loeSonumid, lisaSonum : lisaSonumData, loeMatkadeAndmed, lisaMatk : lisaMatkadeAndmed} = require('../data')

const tagastaSonumid = (req, res) => {
    const sonumid = loeSonumid()
    res.json(sonumid)
}

const lisaSonum = (req, res) => {
    console.log(req.body)
    lisaSonumData({nimi: req.body.nimi, sonum: req.body.sonum})
    res.status(201).end()
}

const tagastaMatkad = (req, res) => {
    const matkad = loeMatkadeAndmed()
    res.json(matkad)
}

const lisaMatk = (req, res) => {
console.log(req.body)
lisaMatkadeAndmed({nimetus: req.body.nimetus, kirjeldus: req.body.kirjeldus})
    res.status(201).end()
} 

async function looMatk(req, res){
    const matk = {
        nimetus: req.body.nimetus,
        pildiUrl: "/assets/Hills.png",
        kirjeldus: req.body.kirjeldus,
        osalejad: []
    }
        await lisaMatk(matk)
        res.status(201).end()
}

module.exports = {
    tagastaSonumid,
    lisaSonum,
    tagastaMatkad,
    lisaMatk,
    looMatk
}

