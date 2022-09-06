let idade = prompt("Qual a sua idade?");
let terminouEnsinoMedio = confirm("Você terminou o ensino médio?");
let cursandoFaculdade = confirm("Você está cursando alguma faculdade?");


if(idade >= 18){
    console.log("Você atingiu a maior idade.");
}else{
	console.log("Você é menor de idade.");
}

if(terminouEnsinoMedio) {
    console.log("Você terminou o ensino médio.");
}else{
    console.log("Você não terminou o ensino médio");
}

if(cursandoFaculdade) {
    console.log("Você está cursando a faculdade.");
}else{
    console.log("Você não está cursando a faculdade.");
}