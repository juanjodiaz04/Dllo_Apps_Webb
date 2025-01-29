// Modulo sin separar los componentes en archivos separados

class Api{

    static API_BASE_URL = 'https://api.jikan.moe/v4';

    fill_form(item){
    const opt = document.createElement('option');
    opt.text = item.texto;
    opt.value = item.val;
    opt.selected = item.sel;
    return opt;
}    

    createSection(item){
    const section = document.createElement('section');
    const content = `<h2>${item.title}</h2>
    <img src="${item.images.jpg.image_url}" alt="${item.title}">`;
    section.className = 'card';
    section.innerHTML = content; 
    section.addEventListener('click', this.manageSectClick); //Al llamarse como callback, se pierde el contexto de la clase
    return section;  
}

    //Para usar funciones que se llaman a si mismas sin perder el contexto, se debe usar una arrow function
    manageSectClick = (ev) => {
    console.log('Click en la sección');
}

    manageForm = async (ev) => {
    ev.preventDefault();
    console.log('Form submit');
    const sel = ev.target.querySelector('select');
    const main = document.querySelector('main');
    main.innerHTML = ''; // Limpia todo el contenido de <main>

    const response = await fetch(`${Api.API_BASE_URL}/anime?genres=${sel.value}`);
    const data = (await response.json()).data;

    data.forEach(item => {
    const section = this.createSection(item); 
    main.appendChild(section);
    });

}

}

export {Api}


