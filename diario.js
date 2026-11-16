var righe = document.querySelectorAll("#calendario tr");
var ore = 0;
var presenze = 0;
var assenze = 0;
for (var i = 1; i < righe.length; i++) {
var celle = righe[i].querySelectorAll("td");
var presenza = celle[3].textContent.trim();
if (presenza === "Presente") {
presenze = presenze + 1;
var numero = parseFloat(celle[4].textContent.replace(",", "."));
if (!isNaN(numero)) {
ore = ore + numero;
}
}
if (presenza === "Assente") {
assenze = assenze + 1;
}
}
document.getElementById("totale-ore").textContent = String(ore).repl
ace(".", ",");
document.getElementById("giorni-presenza").textContent = presenze;
document.getElementById("giorni-assenza").textContent = assenze;
