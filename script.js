
const jmeno = prompt ('Zapiš křestní jméno (bez diakritiky).')
.toLowerCase()
.trim()
.slice(0,3)
const prijmeni = prompt ('Zapiš svoje příjmení (bez diakritiky)')
.toLowerCase()
.trim()
.slice(0,5);

const email =`${prijmeni}${jmeno}@fit.cvut.cz`;
document.body.innerHTML = `<p>Tvůj e-mail je: ${email}.<p>`;