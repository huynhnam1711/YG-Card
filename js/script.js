const button = document.querySelector('.btn');
const model = document.querySelector('.model');
const closeBtn = document.querySelector('.icon-close')

function show() {
    model.classList.add('active')
}

function hidden() {
    model.classList.remove('active')
}

button.addEventListener('click', show)
closeBtn.addEventListener('click', hidden)