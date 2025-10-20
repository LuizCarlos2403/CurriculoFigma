const form = document.getElementById('form-contato');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cargo = document.getElementById('cargo').value;


    let num1 = 3;
    let num2 = 2;

    for (let num = 0; num <= 10; num++) {
        console.log(num1*num);
    }

    console.log(num1 * num2);
    console.log(nome + email);
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Cargo:', cargo);

    form.reset();
});
