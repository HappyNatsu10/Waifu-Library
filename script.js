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