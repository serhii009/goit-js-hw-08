const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
    const trimmed = input.value.trim();

    if (trimmed === '') {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = trimmed;
    }
});