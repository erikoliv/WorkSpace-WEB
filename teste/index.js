function consulta() {
    valor = document.getElementById("pesquisar").value
    // ativo = document.getElementById("pesquisar").value
    fetch(`http://127.0.0.1:3000/count/${valor}`)
        .then(response => {
            response.json()
                .then(data => {
                    // console.log(data)


                    var table = document.getElementById("assetTable");
                    var rowCount = table.rows.length;
                    for (var i = 1; i < rowCount; i++) {
                        var row = table.rows[i];
                        console.log(rowCount)
                        if (rowCount <= 1) {
                            break;
                        }
                            table.deleteRow(i);
                            rowCount--;
                            i--;
                    }
                    for (var i = 0; i < data[0].Total; i++) {
                        var table = document.getElementById("assetTable");

                        var rowCount = table.rows.length;
                        var row = table.insertRow(rowCount);

                        row.insertCell(0).innerHTML = data[i].Ativo
                        row.insertCell(1).innerHTML = data[i].Hostname
                        row.insertCell(2).innerHTML = data[i].Classe
                        row.insertCell(2).innerHTML = data[i].Modelo
                        row.insertCell(3).innerHTML = data[i].Descricao
                        row.insertCell(3).innerHTML = data[i].PartNumber
                        row.insertCell(3).innerHTML = data[i].NumeroSerie
                        row.insertCell(3).innerHTML = data[i].Perifericos
                        row.insertCell(3).innerHTML = data[i].Fabricante
                        row.insertCell(3).innerHTML = data[i].Fornecedor
                        row.insertCell(3).innerHTML = data[i].DataRecebimento
                        row.insertCell(3).innerHTML = data[i].DataEntrega
                        row.insertCell(3).innerHTML = data[i].Vencimento
                        row.insertCell(3).innerHTML = data[i].Exercicio
                        row.insertCell(3).innerHTML = data[i].CartaRemessa
                        row.insertCell(3).innerHTML = data[i].NFRemessa
                        row.insertCell(3).innerHTML = data[i].NFVenda
                        row.insertCell(3).innerHTML = data[i].Contrato
                        row.insertCell(3).innerHTML = data[i].CrServico
                        row.insertCell(3).innerHTML = data[i].Usuario
                        row.insertCell(3).innerHTML = data[i].Unidade
                        row.insertCell(3).innerHTML = data[i].Local
                        row.insertCell(3).innerHTML = data[i].ChamadoServico
                        row.insertCell(3).innerHTML = data[i].ID
                        row.insertCell(3).innerHTML = data[i].Resumo
                        row.insertCell(3).innerHTML = data[i].Observacao
                        row.insertCell(3).innerHTML = data[i].Servico
                        row.insertCell(3).innerHTML = data[i].Status
                        row.insertCell(3).innerHTML = data[i].Operacao
                        row.insertCell(3).innerHTML = data[i].CrCobranca
                        row.insertCell(3).innerHTML = data[i].ChamadoEntrega
                        row.insertCell(3).innerHTML = data[i].ValorDolar
                        row.insertCell(3).innerHTML = data[i].ValorPtax
                        row.insertCell(3).innerHTML = data[i].ValorReais
                        row.insertCell(3).innerHTML = data[i].Lote
                        row.insertCell(3).innerHTML = data[i].ContratoEmbraer

                        // row.insertCell(3).innerHTML = "Engenharia"
                    }
                

                })
        })
}