document.getElementById('fomEndereco').addEventListener('submit', async(event) => {
    event.preventDefault();
    
    const rua = document.getElementById('rua').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cep = document.getElementById('cep').value;

    const addressData = {
        rua,
        cidade,
        estado,
        cep
    };
    
});

try {
    const response = await fetch('http://localhost:3000/address', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addressData)
    });

    const result = await response.json();

    if (response.ok){
        document.getElementById('message').innerHTML = 'Endereço cadastrado com sucesso!';
        document.getElementById(formEndereco).reset();
    }else{
        document.getElementById('message').innerHTML = `Erro: ${result.message}`;
    }
}catch(error){
    document.getElementById('message').innerHTML = 'Erro de comunicação com o servidor';
}
