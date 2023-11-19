
/* 
Async e await

Async permite a definição de uma funçao assincrona

a funcionalidade que escreveremos exigira uma sequencia de açoes encadeadas com cada funçao executada retornando uma promise ("promessa")

se contiver a expressao await ("Aguardar") a execução da funcao sera pausada a espera da resolução da promise. uma vez resolvida a execução da funçao prosseguira 

uma promise assim como na vida real pode ser cumprida ("Ser resolvida" ) ou falhar ("Ser rejeitda")



Metodo fetch: Metodo que permite a solicitação de um recurso (argumento obrigatorio: URL onde o recurso está), (o metodo fetch retorna uma promise (promessa) )

o metodo json: Gera um objeto JavaScript a partir de uma entrada valida recebida no formato json, o metodo json tambem retorna uma promise
*/


const cep = document.getElementById("cep")
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");


function obterCEP(){
    return cep.value;
}



function mostrarDadosCep(obj){
    return (!obj.erro)? `${obj.logradouro}\n${obj.complemento}\n${obj.bairro}\n${obj.localidade}` : `CEP não encontrado`
};

async function buscarDadosCEP(){

    try{
        const urlCEP = `https://viacep.com.br/ws/${obterCEP()}/json/`;
        const trazerCep = fetch(urlCEP);
        const resposta = await trazerCep
        const dadosJSON = await resposta.json();
        saida.innerText = mostrarDadosCep(dadosJSON);
    }
    catch (e) {
        saida.innerHTML = `<b>Erro<\b>: <i>${e}</i>`;
    }
    

    
   
};

  
   





btnPesquisar.addEventListener("click", buscarDadosCEP)


