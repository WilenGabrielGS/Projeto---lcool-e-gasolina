function calcularMelhorPreco(){

    //validar campos 
    let precoAlcool = document.getElementById('alcool').value
    let precoGasolina = document.getElementById('gasolina').value

    if(precoAlcool != ""){
        if(precoGasolina != ""){
        
        /*Calcullar se é melhor usar álcool ou gasolina 
        * se valorAlcool / valorGasolina >= 0.7 é melhor utilizar Gasolina 
        * senão é melhor utilizar álcool
        */
        let resultado = precoAlcool / precoGasolina
        if(resultado >= 0.7){
            //alert("melhor utilizar gasolina")
            document.getElementById('resultado').innerHTML = "melhor utilizar gasolina"
        }else{
            //alert("melhor utilizar alcool")
            document.getElementById('resultado').innerHTML = "melhor utilizar alcool"
        }

        }else{
        alert("preencha o preço da gasolina")
        }
    }else{
        alert("preencha o preço do álcool")
    }

}