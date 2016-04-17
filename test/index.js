import 'babel-polyfill';
import interval from '../';

const input_number = document.querySelector('input');
input_number.addEventListener('change', (e)=>{
	console.log('change');
	interval(e.target.value-0);
}, false);

const [div_result, div_plus, div_minus] = Array.from(document.body.getElementsByTagName('div'));

div_plus.addEventListener('mousedowned', (e)=>{
	console.log('plus');
	div_result.textContent = (div_result.textContent-0) + 1;
}, false);

div_minus.addEventListener('mousedowned', (e)=>{
	console.log('minus');
	div_result.textContent = (div_result.textContent-0) - 1;
}, false);
