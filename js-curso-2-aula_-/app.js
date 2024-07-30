//Armazenando número aleatório
let listaNumerosAleatorios = [];
let numeroLimite = 100;
let numeroAleatorio = geraNumberAleatorio();
let tentativas = 1;

//Função com parâmetro
//Inserindo valores nos campos
function campo(tag, texto){

    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    //Adicionando voz para interação de acordo com o link da documentação do script disponobilizada pelo front
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

//chamando funções com parâmetros
function textosIniciais(){
    campo('h1',"Jogo do número secreto");
    let textoParagrafo = `Insira um número entre 1 e ${numeroLimite}`;
    campo('p',textoParagrafo);

}
textosIniciais();

//Função básica
function verificarChute(){    
    let chute = document.querySelector("input").value;
    console.log(numeroAleatorio);

    if (chute>0 && chute<=100){

        if (chute == numeroAleatorio){
            let mensagemTentativas = tentativas > 1 ? "tentativas": "tentativa";
            let mensagemAcertou = `Você acertou o número secreto com ${tentativas} ${mensagemTentativas}!`;
            campo("h1","Parábens!");
            campo("p",mensagemAcertou);
            document.getElementById("reiniciar").removeAttribute("disabled");
        } else{
            if(chute > numeroAleatorio){
                campo("h1","Você errou!");
                campo("p","O número secreto é menor"); 
            } else{
                campo("h1","Você errou!");
                campo("p","O número secreto é maior");  
            }
            tentativas++;
            limpaDados();
        }
    }else{
        campo("h1","Insira um valor válido");
    }   
     
}   

//Função com retorno
function geraNumberAleatorio(){
    let numeroEscolhido = Math.round(Math.random() * numeroLimite + 1);
    let qtdElementosLista = listaNumerosAleatorios.length;
    if (qtdElementosLista = numeroLimite){

        qtdElementosLista = [];
    }
    if (listaNumerosAleatorios.includes(numeroEscolhido)){
        return geraNumberAleatorio();
    }else{
        listaNumerosAleatorios.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

//Função limpa os dados quando errar
function limpaDados(){
    chute = document.querySelector("input");
    chute.value = null;
}

function novoJogo(){
    numeroAleatorio = geraNumberAleatorio();
    limpaDados();
    textosIniciais();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

function validacao(chute){

    while(1){
        if(chute > 0 && chute <= 100){
            break;
        } else{
            campo("h1","Valor inválido");
        }
    }
}