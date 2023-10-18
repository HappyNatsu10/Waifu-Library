function myFunction(smallImg) {
    var fullImg = document.getElementById("imageBox")
    fullImg.src = smallImg.src
}

const toggleBtn =document.querySelector('.search')
        const toggleBtnIcon =document.querySelector('.search i')
        const dropDownMenu =document.querySelector('.drop_search-bar')

        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-magnifying-glass'
        }


let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
 let lenghtItems = items.length - 1;
next.onclick = function(){
    if(active + 1 > lenghtItems){
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lenghtItems;
    }else {
        active = active - 1
    }
    reloadSlider()
}

let refreshSlider = setInterval(()=> {next.click()}, 3000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider); 
    refreshSlider = setInterval(()=> {next.click()}, 3000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key; 
        reloadSlider();
    })
})
