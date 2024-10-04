const contactForm = document.querySelector('#contact-form');
let formName = document.getElementById('name');
let formEmail = document.getElementById('email');
let formMessage = document.getElementById('message');


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: formName.value,
        email: formEmail.value,
        message: formMessage.value
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/send-message');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('Email sent');
            formName.value = '';
            formEmail.value = '';
            formMessage.value = '';
        } /*else {
            alert('Something went wrong');
        }*/
    }

    xhr.send(JSON.stringify(formData));
})