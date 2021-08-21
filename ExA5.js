let msg1 ="Olá";
let msg2 ="tudo bem?";
console.log(msg1+msg2)


const frase = "Hello, Bluemers em maiúsculo";
console.log(frase.toUpperCase());

//letra minuscula--> .toLowerCase(

  const frase1 = "VAI SÃO PAULO!!!";
  console.log(frase1.toLowerCase());

  //Fatiamento (slice)
// (0,1) -> 1 letra
  let nome = "Amanda";
  console.log(nome.slice(0,3));

  let nome2 ="Fujiram Nakombi";
  y = nome2.slice(0,9);
  console.log(y);

let nome5 = 'Amanda Cons';
console.log(nome5.slice(0,5) + nome[5].toUpperCase());

let numero = prompt("Digite um numero:");
if(numero % 2 === 0){
  console.log("Número par");
}
 else (numero % 2 !==0);
  {
    console.log("Número impar");