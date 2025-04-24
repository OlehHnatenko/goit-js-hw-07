const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

nameInput.addEventListener(`input`, (evt) => {
    const outputValue = evt.currentTarget.value.trim();
    nameOutput.textContent = outputValue === `` ? `Anonymous` : outputValue;
});