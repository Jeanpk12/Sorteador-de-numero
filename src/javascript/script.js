const button = document.getElementById('generate');

button.addEventListener('click', () =>{
   const min = parseInt(document.getElementById('min').value);
   const max = parseInt(document.getElementById('max').value);
   
   let resulte = Math.floor(Math.random() * (max - min + 1)) + min;

    if(isNaN(resulte) || min > max){
        resulte = 'Valor inválido 🤨'
    }

   document.querySelector('#resulte > span').textContent = resulte;
})