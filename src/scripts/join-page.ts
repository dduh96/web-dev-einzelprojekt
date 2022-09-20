
const form = document.getElementById('join-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // @ts-ignore todo configure esLint more liberally
    const username = form.elements.username.value;

    const parentDiv = document.getElementById('div-join-form');
    const newParagraph = document.createElement('h3');
    newParagraph.innerText = `Welcome to the club, ${username}!`;
    newParagraph.classList.add('special-text', 'text-center');

    parentDiv.appendChild(newParagraph);
});
