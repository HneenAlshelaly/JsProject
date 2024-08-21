var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('massage-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)) {
        nameError.innerHTML = 'full name is required';
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number must be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'only digits are allowed';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.innerHTML = 'Email is invalid';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMassage() {
    var message = document.getElementById('massage').value;
    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + ' characters left';
        return false
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMassage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill the form correctly';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}