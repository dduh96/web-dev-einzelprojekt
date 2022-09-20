import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import { printMessage } from './scripts/test.ts';
import 'bootstrap';

const user = 'susan';
console.log(`hello ${user}, welcome to your npm project!`);

printMessage(user);
printMessage(['susan', 'eric', 'john']);

const form = document.getElementById('join-form');

form.addEventListener('submit', (event) => {
    console.log('IN SUBMIT');
    console.log(event);
});
