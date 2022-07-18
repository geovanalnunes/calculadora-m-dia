function calcular (){
    event.preventDefault()
    let notasInput = document.getElementById("notas").value;
    let aprovado = document.getElementById("aprovado");
    let textResult = document.getElementById("text-result");
    let result = document.getElementById("result");
    /*
    Calculo = Soma das notas / 3
    Se maior que 6, passou
    Se menor que 6, reprovou
    */
   let calculo= (notasInput / 3)
   alert(calculo)
   if(calculo>=6){
    /* Aprovado */
    textResult.innerHTML = "Você passou";
    result.innerHTML = "Notas>6"
   }
   else {
    /* Reprovado */
    textResult.innerHTML = "Você não passou"
    result.innerHTML = "Notas<6"
   }

   aprovado.classList.remove("hide")
}