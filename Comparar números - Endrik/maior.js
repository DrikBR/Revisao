function mostrar_imput() {
    var num1 = parseInt(prompt("Digita um número aí"));
    var num2 = parseInt(prompt("Digita outro número pfv"));
    var texto = document.getElementById("resultado");

    if (num1 > num2) {
        texto.innerHTML = "Entre os valores " + num1 + " e " + num2 + ", o maior valor é " + num1; //serve pra substituir o valor da variável texto
    }

    else if (num1 < num2) {
        texto.innerHTML = "Entre os valores " + num1 + " e " + num2 + ", o maior valor é " + num2;
    }

    else {
        texto.innerHTML = "Entre os valores " + num1 + " e " + num2 + ", ambos são IGUAIS";
    }
}