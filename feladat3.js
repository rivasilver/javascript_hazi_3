document.getElementById('gomb')
    .addEventListener('click', () => {
        let nev = document.forms['regisztracio']['nev'].value;
        let jelszo1 = document.forms['regisztracio']['jelszo1'].value;
        let jelszo2 = document.forms['regisztracio']['jelszo2'].value;
        let email = document.forms['regisztracio']['email'].value;
        let szul_datum = document.forms['regisztracio']['szul_datum'].value;
        let minden_kitoltve = true;
        if (nev === ''){ // raktam rá minlength-et de nem úgy néz ki mintha sok hatása lenne
            minden_kitoltve = false;
            alert("A felhasználónév minimum 5 karakter legyen!")
        }
        if (jelszo1 != jelszo2){
            minden_kitoltve = false;
            alert("A két jelszó nem egyezik meg!")
        }
        if (jelszo1 === '' || jelszo2 === ''){
            minden_kitoltve = false;
            alert("A jelszó minimum 5 karakter hosszú legyen!")
        }
        if (minden_kitoltve){
            let felhasznalo = {
                nev : nev,
                jelszo : jelszo1,
                email : email,
                szul_datum : szul_datum
            };
            console.log(felhasznalo);
        }

    });