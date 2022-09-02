const num = 0;

function typeWrite(elemento){
  const textoArray = elemento.innerText.split('');
  elemento.innerHTML = ' ';
  elemento.classList.toggle('active');
  textoArray.forEach(function(letra, i){   
    
  setTimeout(function(){
      elemento.innerHTML += letra;
  }, 75 * i)

});
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);
