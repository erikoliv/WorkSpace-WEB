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


    // if (cep.lenght < 9) {
    //     alert(cep.lenght)
    // } else {
    //     alert(cep.lenght)
    // }

    if (cep != "") {
        preencheCep(cep);

    } else {
        //cep sem valor, limpa o formu
        // limpaCEP();
        // alert("CEP VAZIO.");
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
    document.querySelector("#rua" + campo).value = ("");
    document.querySelector("#complemento" + campo).value = ("");
    document.querySelector("#bairro" + campo).value = ("");
    document.querySelector("#cidade" + campo).value = ("");
    document.querySelector("#uf" + campo).value = ("");
}