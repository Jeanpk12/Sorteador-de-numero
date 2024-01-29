const button = document.getElementById('generate');

button.addEventListener('click', () =>{
   const min = parseInt(document.getElementById('min').value);
   const max = parseInt(document.getElementById('max').value);
   
   let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if(isNaN(result)){
        result = 'Valor inválido 🤨'
    } else if(min > max){
        result = `O valor mínimo deve ser menor que o valor máximo! ${min} não é menor que ${max} 😒`
    }
    else if(min === max){
        result = `Surpresa! O número serteado foi o ${result} 🙄`
    }

   document.querySelector('#result > span').textContent = result;
})