const refs = {
    input: document.querySelector("#font-size-control"),
    span: document.querySelector("#text"),
};

refs.input.addEventListener("input", handleChange);

refs.span.style.fontSize = `${refs.input.value}px`;

function handleChange({ currentTarget }) {
    refs.span.style.fontSize = `${currentTarget.value}px`;
}