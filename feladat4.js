document.getElementById('elkuld')
    .addEventListener('click', () => {
        let nev = document.forms['olvas']['nev'].value;
        let kedvenc_konyv = document.forms['olvas']['kedvenc_konyv'].value;
        let kedvenc_iro = document.forms['olvas']['kedvenc_iro'].value;
        let db = document.forms['olvas']['db'].value;
        let mikor = document.forms['olvas']['mikor'].value;
        let mufaj = document.forms['olvas']['mufaj[]'];
        let mufaj_valasztva = [];
        for (let index = 0; index < mufaj.length; index++) {
            const element = mufaj[index];
            if (element.type == 'checkbox' && element.checked == true) {
                mufaj_valasztva.push(element.value);
            }
        }
        let minden_kitoltve = true;
        if (nev === '') {
            minden_kitoltve = false;
            alert('Kérlek, add meg a neved!')
        }
        if (kedvenc_konyv === '') {
            minden_kitoltve = false;
            alert('Nem adtad meg a kedvenc könyved!')
        }
        if (kedvenc_iro === '') {
            minden_kitoltve = false;
            alert('Nem adtad meg a kedvenc íród!')
        }
        if (mufaj_valasztva.length == 0) {
            minden_kitoltve = false;
            alert('Nem adtad meg, hogy milyen műfajt szeretsz!')
        }

        if (minden_kitoltve) {
            let olvaso = {
                nev : nev,
                kedvenc_konyv : kedvenc_konyv,
                kedvenc_iro : kedvenc_iro,
                db : db,
                mikor : mikor,
                mufaj: mufaj_valasztva,
            };
            console.log(olvaso);
        }
    });