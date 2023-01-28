const inputSide = document.querySelector('input')

const xMark = document.querySelector('.fa-xmark')

// let inputText;

inputSide.addEventListener('keyup' , silIconuGorunsun)


function silIconuGorunsun(e) {
    
// inputText = inputSide.value
if(inputSide.value.length >=1){
    xMark.style.display = 'block'
}else{
    xMark.style.display = 'none'

}
              //2ci varyant
// if(inputText.length >=1){
//     xMark.classList.add('goster')
// }else{
//     xMark.classList.remove('goster')

// }

}

xMark.addEventListener('click', yazilarSilinsin)
 
function yazilarSilinsin(e) {
    xMark.style.display = 'none'
    inputSide.value = ' '
}


  
   