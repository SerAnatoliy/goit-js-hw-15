const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(value) {
    value.preventDefault();

    const { email, password } = value.currentTarget.elements;

    if (email.value.length === 0 || password.value.length === 0) {
        return alert("Всі поля повинні бути заповнені !!!");
    }

    const user = {
        email: email.value,
        password: password.value,
    };

    console.log(user);

    form.reset();
}