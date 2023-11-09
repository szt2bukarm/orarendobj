'use strict'

const feladatok = {
    hetfo1: {
        idopont: "09:15",
        leiras: "Reggeli értekezlet",
        nap: "hetfo"
    },
    hetfo2: {
        idopont: "10:30",
        leiras: "Fontos telefonhívás",
        nap: "hetfo"
    },
    hetfo3: {
        idopont: "11:45",
        leiras: "Ebéd szünet",
        nap: "hetfo"
    },
    hetfo4: {
        idopont: "13:00",
        leiras: "Projekt megbeszélés",
        nap: "hetfo"
    },
    hetfo5: {
        idopont: "15:30",
        leiras: "Ügyféltalálkozó",
        nap: "hetfo"
    },
    kedd1: {
        idopont: "08:30",
        leiras: "Reggeli futás",
        nap: "kedd"
    },
    kedd2: {
        idopont: "10:45",
        leiras: "Bevásárlás és kutya sétáltatás",
        nap: "kedd"
    },
    kedd3: {
        idopont: "12:30",
        leiras: "Ebéd szünet",
        nap: "kedd"
    },
    kedd4: {
        idopont: "14:00",
        leiras: "Házimunka és kertészkedés",
        nap: "kedd"
    },
    szerda1: {
        idopont: "07:30",
        leiras: "Reggeli túra a hegyen",
        nap: "szerda"
    },
    szerda2: {
        idopont: "11:45",
        leiras: "Ebéd a túratársakkal",
        nap: "szerda"
    },
    szerda3: {
        idopont: "14:35",
        leiras: "Pihenés és könyv olvasás",
        nap: "szerda"
    },
    szerda4: {
        idopont: "18:00",
        leiras: "Vacsora készítés",
        nap: "szerda"
    },
    csutortok1: {
        idopont: "09:00",
        leiras: "Reggeli bevásárlás",
        nap: "csutortok"
    },
    csutortok2: {
        idopont: "11:00",
        leiras: "Ügyíntézés",
        nap: "csutortok"
    },
    csutortok3: {
        idopont: "12:00",
        leiras: "Ebéd a családdal",
        nap: "csutortok"
    },
    csutortok4: {
        idopont: "15:00",
        leiras: "Orvosi időpont",
        nap: "csutortok"
    },
    csutortok5: {
        idopont: "19:00",
        leiras: "Esti filmezés",
        nap: "csutortok"
    },
    pentek1: {
        idopont: "09:00",
        leiras: "Reggeli megbeszélés",
        nap: "pentek"
    },
    pentek2: {
        idopont: "11:15",
        leiras: "Projekt ellenőrzés",
        nap: "pentek"
    },
    pentek3: {
        idopont: "13:45",
        leiras: "Ebéd a projekttársakkal",
        nap: "pentek"
    },
    pentek4: {
        idopont: "15:30",
        leiras: "Bevásárlás a hétvégére",
        nap: "pentek"
    },
    pentek5: {
        idopont: "20:00",
        leiras: "Vacsora a családdal",
        nap: "pentek"
    }
}

const hetfo = document.querySelector('.monday')
const kedd = document.querySelector('.tuesday')
const szerda = document.querySelector('.wednesday')
const csutortok = document.querySelector('.thursday')
const pentek = document.querySelector('.friday')
const feladatokEntry = Object.entries(feladatok)

function feladatHTMLKeszito(idopont, leiras, randomColor) {
    return `
        <div style="background-color:rgb(var(--color${randomColor}));box-shadow: 0px .3rem 1rem rgba(var(--color${randomColor}),0.7);" class="activity">
            <p class="time">${idopont}</p>
            <p class="activity-desc">${leiras}</p>
        </div>
    `;
}

let randomColor;
for (const feladat of feladatokEntry) {
    randomColor = Math.trunc(Math.random()*7) + 1;
    const feladatHTML = feladatHTMLKeszito(feladat[1].idopont, feladat[1].leiras, randomColor);

    switch (feladat[1].nap) {
        case "hetfo":
            hetfo.insertAdjacentHTML('beforeend', feladatHTML);
            break;
        case "kedd":
            kedd.insertAdjacentHTML('beforeend', feladatHTML);
            break;
        case "szerda":
            szerda.insertAdjacentHTML('beforeend', feladatHTML);
            break;
        case "csutortok":
            csutortok.insertAdjacentHTML('beforeend', feladatHTML);
            break;
        case "pentek":
            pentek.insertAdjacentHTML('beforeend', feladatHTML);
            break;
        default:
            break;
    }
}

