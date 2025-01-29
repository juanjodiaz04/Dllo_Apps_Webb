export default class Anime {
    // Llamados a la API
    static API_BASE_URL = 'https://api.jikan.moe/v4';

    constructor(id, name, URL){
        id = this.id;
        name = this.name;
        URL = this.URL;
    }

    static async getGenres(){
        const response = await fetch(`${Anime.API_BASE_URL}/genres/anime`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = (await response.json()).data;
        new Anime(data.id, data.name, data.URL);
        let genres = [];
        data.array.forEach(element => {
            genre.push(new Anime(element.id, element.name, element.URL));
        });

        return genres;

    }


}