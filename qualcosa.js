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
var titolo = document.getElementById("titolo1");
var testo = document.getElementById("testo1");
titolo.addEventListener("click", function () {
testo.hidden = !testo.hidden;
});
var segreto = Math.floor(Math.random() * 10) + 1;
var bottone = document.getElementById("prova");
bottone.addEventListener("click", function () {
var scelto = Number(document.getElementById("numero").value);
var messaggio = document.getElementById("messaggio");
if (scelto === segreto) {
messaggio.textContent = "Bravo, hai indovinato!";
} else if (scelto < segreto) {
messaggio.textContent = "Troppo basso";
} else {
messaggio.textContent = "Troppo alto";
}
});
var frasi = ["Imparo ogni giorno", "Ogni errore insegna qualcosa",
"Provo e Riprovo"];
var bottone = document.getElementById("nuova");
bottone.addEventListener("click", function () {
var numero = Math.floor(Math.random() * frasi.length);
document.getElementById("frase").textContent = frasi[numero];
});
