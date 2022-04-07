function consulta() {
    valor = document.getElementById("pesquisar").value
    // ativo = document.getElementById("pesquisar").value
    fetch(`http://127.0.0.1:3000/count/${valor}`)
        .then(response => {
            response.json()
                .then(data => {
                    for (var i = 0; i <= data.Valor; i++) {
                        var table = document.getElementById("assetTable");

                        var rowCount = table.rows.length;
                        var row = table.insertRow(rowCount);

                        row.insertCell(0).innerHTML = "NB12345s"
                        row.insertCell(1).innerHTML = "Notebook"
                        row.insertCell(2).innerHTML = "High Level"
                        row.insertCell(3).innerHTML = "Engenharia"
                    }


                })
        })

        








}