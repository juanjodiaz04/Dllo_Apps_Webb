const myBody = document.body;
const myDiv = document.createElement('div');

myDiv.innerHTML = '<h1>Este es un nuevo título</h1>';
myDiv.style = 'background-color: #f0f0f0; padding: 20px;';
myDiv.id = 'newDiv';
myDiv.classList.add('newDivClass');


//myBody.appendChild(myDiv);


const myli = document.getElementsByTagName('li');
//myli[0].textContent = 'Elemento modificado';