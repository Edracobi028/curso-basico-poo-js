




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

//Codigo para futuras subclases, usando extend a la clase Student 
class FreeStudent extends Student{
    //llamar al constructor de la clase Student con 'props'
    constructor(props){ //como parametro usamos 'props' Para recibir las propiedades de las instancias
        super(props); //Llamar al constructor de la clase madre con super() y enviarle de regreso con 'props' lo que recibimos de las instancias
    }
    //Nuevo metodo para manipular lista de approvedCourses y/o añadir un nuevo curso y validar si la clase esta disponible
    approveCourse(newCourse) {
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos" + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent  extends Student{
    constructor(props){ 
        super(props); 
    }
    //Validar si el curso no esta en ingles
    approveCourse(newCourse) {
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos" + this.name + ", no puedes tomar cursos en inglés");
        }
    }
}

class ExpertStudent  extends Student{
    constructor(props){ 
        super(props); 
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

}

//Metodo que reciba el ID, por fuera ligar el link del video con el ID 
function videoPlay(id) {
    const urlSecreta = "https://platziultrasecreto.com/"+ id;
    console.log("Se está reproducioendo desde la url " + urlSecreta);
}

//Metodo que pause el video
function videoStop(id) {
    const urlSecreta = "https://platziultrasecreto.com/"+ id;
    console.log("Pausamos la url " + urlSecreta);
}
// Los export nos permiten definir en los modulos cuales son las unicas clases, prototipos, variables las unicas partes que podamos acceder
class PLatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    //Creamos un metodo para que puedan reproducir el video
    reproducir(){
        videoPlay(this.videoID);
    }
    //Creamos un metodo para que puedan pausar el video
    pausar(){
        videoStop(this.videoID);
    }
}



class Course {
    constructor({
        name,
        classes = [],
        comments = [],
        isFree = false,//agregar parametro para checar que no sean gratis
        lang = "spanish",//agregar parametro para checar el lenguaje
    }) {
        this._name = name; //Agregamos el guion bajo para indicar que es un atributo privado
        this.classes = classes;
        this.comments = comments;
        this.isFree = isFree;
        this.lang = lang;
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
    lang: "english", 
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
    isFree: true,
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
const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@jmiguelito.com",
    instagram: "miguelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});
