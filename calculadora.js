function calcular(operador)
{
var numero1;
var numero2;

numero1 = Number(document.getElementById("numero1").value)
numero2 = Number(document.getElementById("numero2").value)

var resultado = eval(numero1 + operador + numero2)


 document.getElementById("resultado").value = resultado
};