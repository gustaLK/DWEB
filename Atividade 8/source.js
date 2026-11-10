
let media = 0;
let velha = 0;
let nova = Infinity;
let tot = 0;
let bom = 0;
let ruim = 0;

function enviar(event) {
    event.preventDefault();

    let idade = Number(document.getElementById("idade").value);
    let avaliacao = Number(document.getElementById("aval").value);

    // Soma das idades
    media += idade;

    // Encontra a pessoa mais velha
    if (idade > velha) {
        velha = idade;
    }

    // Encontra a pessoa mais nova
    if (idade < nova) {
        nova = idade;
    }

    // Contabiliza as avaliações
    if (avaliacao >= 3) {
        bom++;
    } else if (avaliacao <= 2) {
        ruim++;
    }

    tot++;

    alert("Avaliação registrada!");

    // Limpa o formulário
    event.target.reset();
}

function calcular(event) {
    event.preventDefault();

    if (tot === 0) {
        alert("Nenhuma avaliação foi registrada!");
        return;
    }

    let mediaFinal = media / tot;

    alert("A pessoa mais nova: " + nova);
    alert("A pessoa mais velha: " + velha);
    alert("A média de idade: " + mediaFinal.toFixed(2));
    alert("Total de pessoas: " + tot);
    alert("Pessoas que gostaram: " + bom);
    alert("Pessoas que não gostaram: " + ruim);
}
