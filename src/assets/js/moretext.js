const readMoreBtn = document.querySelector('.readButton');
const  descrip = document.querySelector('.product-description');

readMoreBtn.addEventListener('click',(e)=>{
  descrip.classList.toggle('show-more');
  if(readMoreBtn.innerText === 'Leer Mas'){
    readMoreBtn.innerText = 'Ver Menos';
  }else{
    readMoreBtn.innerText = 'Leer Mas';
  }
})