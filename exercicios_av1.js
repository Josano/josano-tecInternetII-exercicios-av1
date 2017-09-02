function media(num1, num2) {
  console.log("\nA media dos valores e: " + (num1 + num2 ) / 2);
}

function deveFazerAV3(av1,av2){
  if((av1 >= 4 && av2 >=4) && ((av1+av2) >= 6))
      console.log("Parabens voce foi aprovado");  
  else
      console.log("Necessario fazer AV3"); 
}

function imprimirAte(num1){
    for(i = 1; i <= num1; i++){
        console.log(i+"\n");
    }
}

function divisiveisPor(num1, num2){
    for(i = 1; i <= num2; i++){
        if(i % num1 == 0){
            console.log(i+"\n");
        }    
    }
}

function maiorMenor(vetor){
    console.log("O maior valor e: " + Math.max.apply(Math, vetor));
    console.log("O maior valor e: " + Math.min.apply(Math, vetor));
}

var opcao;

do{
    console.clear();
    opcao = parseInt(prompt("Digite a opcao: \n\n1 - Media de 2 numeros\n2 - Calcular Notas\n3 - Escrever numeros\n4 - Numeros divisiveis\n5 - Maior e Menor valor"));
 
  }while(isNaN(opcao));

switch(opcao) {
    case 0: opcao = "Ate logo!!!"; break;
    case 1:   var num1 = parseFloat(prompt("Digite o primeiro valor"));
              var num2 = parseFloat(prompt("Digite o segundo valor"));
              media(num1, num2); break;
    case 2:   var num1 = parseFloat(prompt("Desejo imprimir de 1 ate....\nDigite um numero"));
              deveFazerAV3(num1, num2); break;         
    case 3:   var num1 = parseFloat(prompt("Desejo imprimir de 1 ate....\nDigite um numero"));
              imprimirAte(num1); break;
    case 4:   var num1 = parseFloat(prompt("Digite o numero divisor"));
              var num2 = parseFloat(prompt("Digite o numero dividendo"));
              divisiveisPor(num1, num2); break;
    case 5:   var tamanho = parseFloat(prompt("Digite quantos elementos deseja verificar"));
              var valor, vetor = [];
              for(i = 0; i < tamanho; i++){
                  valor = parseFloat(prompt("Digite a posicao " + (i+1) + " do vetor")); 
                  vetor.push(valor);
              }    
              maiorMenor(vetor); break;
}