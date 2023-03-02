function fibonacci(num) {
    var anterior = 0
    var atual = 1
    var proximo = 1
    var validacao = false

    for (let i = 0; i < num; i++) {
        anterior = atual + proximo
        atual = proximo
        proximo = anterior
        if (num == proximo || num == 0 || num == 1) {
            validacao = true
        }
    }

    return validacao

}

const faturamento = require("./faturamento.json", {
    assert: {
        type: 'json'
    }
})



function distribuidora(faturamentoArray) {

    var maiorFaturamento, menorFaturamento, superiorMedia
    var mediaSalarial = 3200
    var faturamentoArray = JSON.parse(faturamento)

    faturamentoArray.forEach(faturamentoDiario => {

        if (faturamentoDiario > maiorFaturamento) {
            maiorFaturamento = faturamentoDiario
        }
        if (faturamentoDiario < menorFaturamento && faturamentoDiario != 0) {
            menorFaturamento = faturamentoDiario
        }
        if (faturamentoDiario > mediaSalarial) {
            superiorMedia++
        }
    });

    console.log("Maior faturamento: " + maiorFaturamento);
    console.log("Menor faturamento: " + menorFaturamento);
    console.log("Total de dia com faturamento > media salarial: " + superiorMedia);
}


function distribuidora2(faturamentoSP, faturamentoRJ, faturamentoMG, faturamentoES, faturamentoOutros) {
    let faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros
    let sp, rj, mg, es, outros

    sp = faturamentoSP * 100 / faturamentoTotal
    rj = faturamentoRJ * 100 / faturamentoTotal
    mg = faturamentoMG * 100 / faturamentoTotal
    es = faturamentoES * 100 / faturamentoTotal
    outros = faturamentoOutros * 100 / faturamentoTotal

    console.log("SP " + sp.toFixed(2) + "%")
    console.log("RH " + rj.toFixed(2) + "%")
    console.log("MG " + mg.toFixed(2) + "%")
    console.log("ES " + es.toFixed(2) + "%")
    console.log("Outros " + outros.toFixed(2) + "%")


}

function inverteString(palavra) {
    var stringInvertida = ''

    for (var i = palavra.length - 1; i >= 0; i--) {
        stringInvertida += palavra[i]

    }
    return stringInvertida
}

console.log(fibonacci(89));
distribuidora(faturamento)
distribuidora2(67836.43, 36678.66, 29229.88, 27165.48, 19849.53)
console.log(inverteString("socorram me subi no onibus em marrocos"))