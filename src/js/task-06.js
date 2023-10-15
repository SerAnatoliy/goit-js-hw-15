const input = document.querySelector("#validation-input");
input.addEventListener("blur", validate);

const length = Number(input.getAttribute("data-length"));
function validate(value) {
    const inputLength = value.currentTarget.value.trim().length;

    if (inputLength === length) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else if (inputLength !== 0 && inputLength !== length) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    } else if (inputLength === 0) {
        input.classList.remove("valid");
        input.classList.remove("invalid");
    }
}