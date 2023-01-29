const inputSide = document.querySelector('input')

const xMark = document.querySelector('.fa-xmark')

let inputText;

inputSide.addEventListener('keyup' , silIconuGorunsun)


function silIconuGorunsun(e) {
    // e.preventDefault()
    // console.log(e.key);
inputText = inputSide.value
if(inputText.length >= 1){
    xMark.style.display = 'block'
}else{
    xMark.style.display = 'none'

}
  if(e.key == 'Enter'){
    googleAxtar()
  }
              //2ci varyant
// if(inputText.length >=1){
//     xMark.classList.add('goster')
// }else{
//     xMark.classList.remove('goster')

// }

}



xMark.addEventListener('click', yazilarSilinsin)
 
function yazilarSilinsin() {
    xMark.style.display = 'none'
    inputSide.value = ''
}

const axtarbtn = document.getElementById('searchbtn')
axtarbtn.addEventListener('click', function () {
    googleAxtar()
} )   

function googleAxtar() {
    // e.preventDefault()
    if (inputText.length >= 1) {
        let url = `https://google.com/search?q=${inputText}`
        window.location = url
       
    }
 }

 
