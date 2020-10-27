// PARTE 1: INTRODUÇÃO AO JAVASCRIPT

// 1 introdução ao Javascript

// alert("Meu segundo JS");

// var nome = "Gean Costa"
// var idade = 29;
// alert("Bem-vindo, " + nome + ". Você tem " + idade + " anos.");

// idade2 = 10;
// alert("Daqui a 10 anos você terá " + (idade + idade2) + " anos");

// console.log(nome);
// console.log(idade);
// console.log(idade2);

// var frase = "Brasil é o melhor país do mundo";
// alert(frase);
// console.log(frase);
// alert(frase.replace("Brasil", "Alemanha"));
// console.log(frase.replace("Brasil", "Alemanha"));

// alert(frase.toUpperCase());
// console.log(frase.toUpperCase());

// alert(frase.toLowerCase());
// console.log(frase.toLowerCase());

// 2 array e dicionário
// var lista = ["pera", "uva", "maçã"];
// alert(lista);
// console.log(lista);

// alert(lista[0]);
// console.log(lista[0]);

// lista.push("abacate")
// alert(lista);
// console.log(lista);

// lista.pop()
// alert(lista);
// console.log(lista);

// alert(lista.length);
// console.log(lista.length);

// alert(lista.reverse());
// console.log(lista.reverse());

// alert(lista.join(" - "));
// console.log(lista.join(" - "));

// var fruta = {nome: "maça", cor: "vermelho"}   
// console.log(fruta);

// alert(fruta.nome);
// alert(fruta.cor);

// var frutas = [{nome: "maça", cor: "vermelho"}, {nome: "banana", cor: "amarelo"}]   
// console.log(frutas);

// alert(frutas[1].nome);
// alert(frutas[1].cor);

// 3 condicionais, laços de repetição e date
// var idade1 = prompt("Qual a sua idade? ")

// if (idade1 >= 18) {
//     alert("Maior de idade");
// }
// else {
//     alert("Menor de idade")
// }

// console.log(idade1)

// while(idade1 < 18){
//     idade1 = prompt("Qual a sua idade? ")
// }

// var idade;
// for (idade = 1; idade <= 5; idade++) {
//     console.log("Menor de idade.");
// }

// var data = new Date();
// console.log(data);
// console.log(data.getDate());
// console.log(data.getHours());
// console.log(data.getMinutes());
// console.log(data.getMonth());

// PARTE 2: DESENVOLVA PÁGINAS WEB COM JAVASCRIPT
// desenvolva páginas web com javascript
// function soma(a, b) {
//     return a + b;
// }

// console.log(soma(3, 2));

// function setReplace(frase, nome, novoNome){
//     return frase.replace(nome, novoNome);
// }

// var frase = prompt("Frase:");
// var nome = prompt("Nome:");
// var novoNome = prompt("Novo nome:");

// alert(setReplace(frase, nome, novoNome));

// manipulando elementos da página

function load(){
    console.log("Página carregada.")
}

function button(){
    alert("Obrigado por clicar");
}

function buttonWrite(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function buttonClean(){
    document.getElementById("agradecimento").innerHTML = "";
}

function redirect(){
    // abre em uma outra janela
    window.open("https://github.com/gean-costa/dio_javascript");
    // para abrir na mesma janela
    // window.location.href = "https://github.com/gean-costa/dio_javascript";
}

function change(){
    document.getElementById("mouseMover").innerHTML = "Trocou porque passou o mouse";
}

function unchange(){
    document.getElementById("mouseMover").innerHTML = "Passe o mouse aqui.";
}

function newChange(elemento){
    elemento.innerHTML = "Trocou porque passou o mouse";
}

function newUnchange(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
}

function onChange(elemento){
    console.log(elemento.value);
}