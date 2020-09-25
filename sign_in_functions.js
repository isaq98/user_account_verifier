
function checkForm(form) {
    let regex = /^(?=.{8,15}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/
    let passwordValue = document.getElementById("password1");
    let emailValue = document.getElementById("email_field");

    if(form.email.value === "") {
        emailValue.setCustomValidity("Please enter a valid email.");
        emailValue.reportValidity();
        form.email.focus();
        return false;
    }

    if(!regex.test(form.password1.value)) {
        passwordValue.setCustomValidity("The password must be 8-15 characters long, contain a lowercase letter, an uppercase letter, a number, and a special character.");
        passwordValue.reportValidity();
        form.password1.focus();
        return false;
    }

    if(form.email.value === form.password1.value) {
        passwordValue.setCustomValidity("The email and password cannot be the same.");
        passwordValue.reportValidity();
        form.password1.focus();
        return false;
    }

    if(form.password1.value !== form.password2.value) {
        passwordValue.setCustomValidity("Your passwords do not match");
        passwordValue.reportValidity();
        form.password1.focus();
        return false;
    }

    hideContent();
    return true;
}

function hideForm() {
    document.getElementById("password1").setCustomValidity('');
    document.getElementById("email_field").setCustomValidity('');
}

function hideContent() {
    document.getElementById("test").style.display = 'none';
}