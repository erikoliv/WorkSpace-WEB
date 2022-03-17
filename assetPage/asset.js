// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()

function pesquisaCEP() {
    let cep = document.querySelector("#cep").value
    if (cep != "") {
        if (cep.length >= 8) {
            preencheCep(cep)
        } else {
            limpaCEP()
        }
    } else {
        limpaCEP()
    }
}

function preencheCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            response.json()
                .then(data => showData(data))
        })

    const showData = (result) => {
        for (const campo in result) {
            if (document.querySelector("#" + campo)) {
                document.querySelector("#" + campo).value = result[campo]
            }
        }
    }
}

function limpaCEP() {
    document.getElementById("rua").setAttribute(value, "vazio")
    document.getElementById("complemento").setAttribute(value, "vazio")
    document.getElementById("bairro").setAttribute(value, "vazio")
    document.getElementById("cidade").setAttribute(value, "vazio")
    document.getElementById("uf").setAttribute(value, "vazio")
}