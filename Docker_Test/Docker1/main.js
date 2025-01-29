import { Api } from "./modules/apiClass.js";

const apiClass = new Api();
const genre = [];

window.addEventListener('load', async () => {
    console.log('Page loaded');
    const sel = document.getElementById('sel-generos');
    sel.appendChild(apiClass.fill_form({texto: 'Seleccione un género', val: ' ', sel: true}));

    const response = await fetch(`${Api.API_BASE_URL}/genres/anime`);
    console.log(response.status);

    const data = (await response.json()).data;
    data.forEach(item => {
        genre.push({texto: item.name, val: item.mal_id, sel: false});
        sel.appendChild(apiClass.fill_form({texto: item.name, val: item.mal_id, sel: false}));
    });

    const form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit',  apiClass.manageForm);

});

