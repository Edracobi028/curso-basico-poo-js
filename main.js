class Banda {
    constructor({
        nombre,
        generos = [],
    }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        let nombre = integranteNuevo.nombre; //ya tengo el nombre
        let instrumento = integranteNuevo.instrumento; //ya tengo el nombre
        //console.log(Object.values(this.integrantes));
        let baterista = this.integrantes.find(integrante => integrante.instrumento === "Bateria");
        if (baterista) {
            console.log("Ya tiene baterista!");
            console.log(baterista);

        } else {
            this.integrantes.push({ nombre, instrumento });
            console.log("Integrante Registrado");
            console.log(this.integrantes)
        }
    }
}

const data = {
    nombre: "Los Jacks",
    generos: ["rock", "pop", "post-punk"],
    integrantes: [],
}

class Integrante {
    constructor({
        nombre,
        instrumento,
    }) {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
}


const banda = new Banda(data)
banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }))
banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }))