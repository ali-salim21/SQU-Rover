const text = document.getElementById('heading');

function main() {
    text.style.color = 'blue';
    text.style.fontSize = "20pt";
    text.style.marginLeft = '3em';
} 

text.addEventListener('click', () => main())
