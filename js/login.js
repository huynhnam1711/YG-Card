// first-model
const modelSecu = document.querySelector('.security');
const btnSecu = document.querySelector('.btn');
const closeIcons = document.querySelectorAll('.icon-btn');


btnSecu.addEventListener('click', showModel);
function showModel() {
    modelSecu.classList.add('active')
}

function hiddenModel() {
    modelSecu.classList.remove('active');
}

for(const closeIcon of closeIcons){
    closeIcon.addEventListener('click', hiddenModel);
}

// model-sencond
const model = document.querySelector('.model');
function hiddenModel() {
    model.classList.remove('active');
}

// login > password
var CORRECT_USER = 'YG17';
var CORRECT_PASS = '11';
var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');

if(formLogin.acttachEvent){
    formLogin.acttachEvent('submit', onFormSubmit);
}else{
    formLogin.addEventListener('submit', onFormSubmit);  
}

function onFormSubmit(e){
    var username = inputUsername.value;
    var password = inputPassword.value;

    if(username == CORRECT_USER && password == CORRECT_PASS){
        alert('đăng nhập thành công');
        model.classList.add('active');
        e.preventDefault();
    }else{
        alert('Thông tin đăng nhập sai');
    }
    return false;
}

