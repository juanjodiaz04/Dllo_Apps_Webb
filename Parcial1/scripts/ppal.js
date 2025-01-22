class car {
    #brand;
    static #counter = 0;
    constructor(brand, model, year, color, price, km) {
        this.#brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.km = km;
        car.#counter++;
    }

    get brand() {
        return this.#brand;
    }

    set brand(newBrand) {
        this.#brand = newBrand;
    }
    

    showCar() {
        console.log(`Marca: ${this.#brand}, Modelo: ${this.model}, Año: ${this.year}, Color: ${this.color}, Precio: $${this.price}, Kilometraje: ${this.km} km`);
    }

    static showCounter() {
        console.log(`Cantidad de autos: ${car.#counter}`);
    }
}

const car1 = new car("Toyota", "Corolla", 2019, "Blanco", 200000, 10000);
const car2 = new car("Ford", "Fiesta", 2018, "Rojo", 150000, 20000);
