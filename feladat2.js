document.getElementById('felvetel')
    .addEventListener('click', () => {
        let nev = document.forms['rendeles']['nev'].value;
        let telszam = document.forms['rendeles']['telszam'].value;
        let irszam = document.forms['rendeles']['irszam'].value;
        let varos = document.forms['rendeles']['varos'].value;
        let utca = document.forms['rendeles']['utca'].value;
        let hazszam = document.forms['rendeles']['hazszam'].value;
        let pizzaalap = document.forms['rendeles']['pizzaalap'].value;
        let megjegyzes = document.forms['rendeles']['megjegyzes'].value;
        let feltet = document.forms['rendeles']['feltet[]'];
        let feltet_keri = [];
        for (let index = 0; index < feltet.length; index++) {
            const element = feltet[index];
            if (element.type == 'checkbox' && element.checked == true) {
                feltet_keri.push(element.value);
            }
        }
        let rendeles = {
            nev : nev,
            telszam : telszam,
            irszam : irszam,
            varos : varos,
            utca : utca,
            hazszam : hazszam,
            pizzaalap : pizzaalap,
            feltet : feltet_keri,
            megjegyzes : megjegyzes,
        };
        console.log(rendeles);
    });