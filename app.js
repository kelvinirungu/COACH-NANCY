const texts = ['Skills,', 'Knowledge,', 'Mentlality.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

if(count === texts.length){
    count = 0;
}
currentText = texts[count];
letter = currentText.slice(0, ++index);

document.querySelector('.typing').textContent = letter;
if(letter.length === currentText.length){
    count++;
    index = 0;
}
setTimeout(type, 400);

}());

// const list = document.querySelectorAll('.list');
// function activeLink(){
//     list.forEach((item) =>
//     item.classList.remove('.active'));
//     this.classList.add('.active');
// }
// list.forEach((item) =>
// item.addEventListener('click',activeLink));
