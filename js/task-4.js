const form = document.querySelector(".login-form");
form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const data = {
        email: evt.target.elements.email.value.trim(),
        password: evt.target.elements.password.value.trim(),
    };

    if (!data.email || !data.password) {
        alert('All form fields must be filled in');
        return;


    }

    console.log(data);

    form.reset();
});
