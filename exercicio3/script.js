const nacionalidade = prompt("Escreva aqui a sua nacionalidade:");


if (nacionalidade.toLowerCase() === "brasileira" || nacionalidade.toLowerCase() === "argentina" || nacionalidade.toLowerCase() === "uruguaia" || nacionalidade.toLowerCase() === "chilena" || nacionalidade.toLowerCase() === "colombiana") {
    console.log(`Sua nacionalidade é ${nacionalidade.toLowerCase()}.`);
} else {
    console.log("Nacionalidade não encontrada.");
}