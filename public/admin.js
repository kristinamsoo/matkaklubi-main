async function loeSonumid() {
    const result = await fetch('/api/sonumid', )
    if (!result.ok) {
        console.log('Viga andmete lugemisel')
        return;
    }

    const sonumid = await result.json()
    console.log(sonumid)
}

loeSonumid()

async function loeMatkadeAndmed() {
    const result = await fetch('/api/matkad', )
    if (!result.ok) {
        console.log('Viga andmete lugemisel')
        return;
    }

    const matkad = await result.json()
    console.log(matkad)
}

loeMatkadeAndmed()

/* async function loeUudisedAndmed() {
    const result = await fetch('/api/uudised', )
    if (!result.ok) {
        console.log('Viga andmete lugemisel')
        return;
    }

    const uudised = await result.json()
    console.log(uudised)
}

loeUudisedAndmed() */