function consulta() {
    valor = document.getElementById("pesquisar").value
    fetch(`http://127.0.0.1:3000/count/${valor}`)
        .then(response => {
            response.json()
                .then(data => {
                    var array = []
                    for (var i = 0; i < data[0].Total; i++) {
                        array[i] = [data[i].Ativo, data[i].Hostname, data[i].Classe, data[i].Modelo, data[i].Descricao]
                    }
                    var table = $('#assetTable').DataTable({
                        dom: 'Bfrtip',
                        select: true,
                        buttons: [
                            {
                                text: 'Abrir',
                                action: function () {
                                    var assetData = table.rows({ selected: true }).data()
                                    var data = assetData[0]
                                    localStorage.setItem("storageName", data[0])
                                    window.open("/consulta/consulta.html")
                                    // console.log(data[0])
                                }
                            }
                        ],
                        data: array,
                        columns: [
                            { title: "Ativo" },
                            { title: "Hostname" },
                            { title: "Classe" },
                            { title: "Modelo" },
                            { title: "Descrição" }
                        ]
                    }).clear().rows.add(array).draw()
                })
        })
}

