class Course {
    constructor({
        name,
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombrecito) {
        if (typeof nuevoNombrecito === 'string') {
            if (nuevoNombrecito.trim() == 0) {
                console.log("Es un espacio en blanco");
                return;
            }
            let arrayWords = nuevoNombrecito.split(' ');
            var arrayElements = []
            let cuenta = nuevoNombrecito.length;
            let isEmpty = (nuevoNombrecito.trim()).length;
            console.log("result = " + nuevoNombrecito.trim())
            console.log(isEmpty);
            console.log("Cuenta = " + cuenta);

            arrayWords.forEach(element => {
                let firstLetter = element.charAt(0).toUpperCase();
                let restWord = element.slice(1);
                let camelWord = firstLetter + restWord;
                arrayElements.push(camelWord);

            });
            var phrase = arrayElements.join(" ");
            this._name = phrase.trim();
        } else {
            console.log("No es string o espacio en blanco");
        }
    }
}

const courseName = " "
const nombreMayusculas = new Course({
    name: courseName,
})
nombreMayusculas.name