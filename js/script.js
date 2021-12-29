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


// day and night

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

const popBtns =document.querySelectorAll('.btn1')

function error (){
    alert('Chức năng chưa được thêm vào')
}

for(const popBtn of popBtns){
    popBtn.addEventListener('click', error)
}


