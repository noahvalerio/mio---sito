var bottone = document.getElementById("tema");
bottone.addEventListener("click", function () {
document.body.classList.toggle("scuro");
});
var fine = new Date("2027-02-18");
var oggi = new Date();
var giorni = Math.ceil((fine - oggi) / (1000 * 60 * 60 * 24));
if (giorni < 0) {
giorni = 0;
}
document.getElementById("giorni-mancanti").textContent = giorni;
