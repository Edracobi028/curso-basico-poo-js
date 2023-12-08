//Crear prototipo o
class Student {
    constructor({
        name,
        email,
        username,
        twitter,
        instagram,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],

    }) {
        this._name = name,
        this._email = email;
        this._username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }

    get email(){
        return this._email;
    }
    set email(newEmail){
        this._email = newEmail;
    }

    get username(){
        return this._username;
    }
    set username(username){
        this._username = username;
    }


/* 
    get XXX(){
        return this.XXX;
    }
    set XXX(XXX){
        this.XXX = XXX;
    } */



}



class Course {
    constructor({
        name,
        classes = [],
        comments = [],
    }) {
        this._name = name; //Agregamos el guion bajo para indicar que es un atributo privado
        this.classes = classes;
        this.comments = comments;
    }

    //Crear un metodo get para que muestre el atributo name
    get name(){
        return this._name
    }

    //Crear un metodo set para cambiar el atributo name de un curso
    set name(nuevoNombre){
        if(nuevoNombre === "Curso Malito de Programación Básica"){
            console.error("Web... no");
        } else {
            this._name = nuevoNombre;
        }
    }
}

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
});

const cursoDataBussines = new Course({
    name: "Curso DataBussines",
});

const cursoDataViz = new Course({
    name: "Curso Dataviz",
});

const cursoIntroVideojuegos = new Course({
    name: "Curso Introducción a la Producción de video juegos",
});

const cursoUnity = new Course({
    name: "Curso Unity",
});

////Creamos una instancia del prototipo u objeto de cursos
const cursoProgBasica = new Course({
    name: "Curso gratis de Programación Básica",
});

//cursoProgBasica.name
//Curso gratis de Programación Básica


class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this._name = name;
        this.courses = courses;
    }

    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
}


//Creamos una instancias del prototipo u objeto escuelas
 const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        cursoDataBussines,
        cursoDataViz,
    ],
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        cursoIntroVideojuegos,
        cursoUnity,
    ],
});


//Creamos una instancia del prototipo u objeto
const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@jmiguelito.com",
    instagram: "miguelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});
