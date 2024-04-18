const nome = document.getElementById('caixaDeNome');
const dataNascimento = document.getElementById('dataNascimento');
const email = document.getElementById('caixaEmail');
const senha = document.getElementById('campoSenha');
const tabelaDeCadastro = document.getElementById('tabelaDeCadastro');

function cadastro() {
    console.log(nome.value);
    console.log(dataNascimento.value);
    console.log(email.value);
    console.log(senha.value);

    // const teste = document.createElement('strong');
    // teste.innerHTML = 'Funcionando.'
    // atribui na tela
    // tabelaDeCadastro.append(teste); 
    // console.log(teste);

    // nome - backgroud verde, color vermelho
    tabelaDeCadastro.innerHTML += `<p style= "display: inline-block; background-color: green; color: red; padding-right: 2px;"><strong>Nome: </strong>${nome.value}</p>`;
     // tabelaDeCadastro.innerHTML += `<p style="display: inline-block; padding-right: 2px;"><span style="background-color: green; color: red;">Nome: ${nome.value}</span></p>`;
    
    // data - backgroud preto, color branco
    tabelaDeCadastro.innerHTML += `<p style= "display: inline-block; background-color: black; color: white; padding-right: 2px;"><strong>Data: </strong>${dataNascimento.value}</p>`;
    // tabelaDeCadastro.innerHTML += `<p style= "display: inline-block; padding-right: 2px;"><span style=" background-color: black; color: white;">Data: ${dataNascimento.value}</span></p>`;
    
    // email - backgroud amarelo, color roxo
    tabelaDeCadastro.innerHTML += `<p style= "display: inline-block; background-color: yellow; color: purple; padding-right: 2px;"><strong>Email: </strong>${email.value}</p>`;
    // tabelaDeCadastro.innerHTML += `<p style= "display: inline-block; padding-right: 2px;"><span style=" background-color: yellow; color: purple;">Email: ${email.value}</span></p>`;
    
    // senha - backgroud cinza, color azul
    tabelaDeCadastro.innerHTML += `<p style= "display: inline-block; background-color: gray; color: blue; padding-right: 2px;"><strong>Senha: </strong>${senha.value}</p>`;
    // tabelaDeCadastro.innerHTML += `<p style= "display: inline-block; padding-right: 2px;"><span style=" background-color: gray; color: blue;">Senha: ${senha.value}</span></p><br>`;
    
    console.log("sucesso");
}
