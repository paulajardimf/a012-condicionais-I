const nacionalidade = prompt("Escreva aqui a sua nacionalidade:").toLowerCase();


if (nacionalidade === "brasileira" || nacionalidade === "argentina" || nacionalidade === "uruguaia" || nacionalidade === "chilena" || nacionalidade === "colombiana") {
    console.log(`Sua nacionalidade é ${nacionalidade}.`);
} else {
    console.log("Nacionalidade não encontrada.");
}