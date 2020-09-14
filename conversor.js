var converter = document.getElementById("btn");
var btnlimpar = document.getElementById("btn-limpar");


btnlimpar.onclick = limparTexto;

function conversor(){
        
var input_json = document.getElementById("json");
var input_csv = document.getElementById("csv");

input_csv.innerHTML = '';

var dados = JSON.parse(input_json.value);
console.log(JSON.stringify(dados[0]));

var propriedades = [];
var primeiraLinha = JSON.stringify(dados[0]).split(",");
for (item of primeiraLinha){
        let nomes = item.split('"');
        propriedades.push(nomes[1]);
}

var projeto_csv = [];
projeto_csv[0] = '';
for(prop of propriedades){
    projeto_csv[0]+= '"' + prop + '",';


}

for(var i=0; i <dados.length; i++){
    projeto_csv[i+1] = '';
    for (prop of propriedades) {
        projeto_csv[i+1] += '"' + dados[i][prop] + '",';
    }


}

var csv_resultado = '';
for(item of projeto_csv){
        csv_resultado += item + "\n";

}
    input_csv.innerHTML = csv_resultado;
}


function limparTexto(){

    document.getElementById("json").value = '';
    document.getElementById("csv").value = '';
    alert("limpo com sucesso");
    window.location.reload()


}

