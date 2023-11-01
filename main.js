//Crear objeto literal
const eduardo = {
    name: "Eduardo",
    age: 33,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS",
    ],

    //Crear metodos en un objeto literal llamado aprobarCurso metodo #1
    /* 
    aprobarCurso: function(){

    },
    */

    //Crear metodos en un objeto literal llamado aprobarCurso metodo #2
    aprobarCurso(nuevoCurso) {
        //hacer referencia al mismo objeto, para llamar al array dentro del mismo objeto literal
        this.cursosAprobados.push(nuevoCurso);
    },
}

//Hacer que eduardo apruebe otro curso con metodo push
eduardo.cursosAprobados.push("Curso de responsive design");


//Crear un prototipo llamado "Student"
function Student(name, age, cursosAprobados) {
    //Crear los atributos por defecto
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    //Crear internamente un metodo para el prototipo 
    /* this.aprobarCurso = function (nuevoCurso){
        this.cursosAprobados.push.(nuevoCurso);
    } */
}

//Por fuera crear un metodo para el prototipo por fuera utilizando prototype
Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

//Crear una instancia de este prototipo
//crear una constante llamada Juanita con la nueva instancia a Student
const juanita = new Student(
    "Martha Velazquez",
    18,
    [
        "Curso de introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes"
    ],
);
