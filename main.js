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
        this.name = name,
            this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

class Course {
    constructor({
        name,
        classes = [],
        comments = [],
    }) {
        this.name = name;
        this.classes = classes;
        this.comments = comments;
    }
}



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

//Creamos una instancias del prototipo u objeto escuelas
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
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
    ]
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        cursoIntroVideojuegos,
        cursoUnity,
    ]
});

////Creamos una instancia del prototipo u objeto de cursos
const cursoProgBasica = new Course({
    name: "Curso gratis de Programación Básica",
});

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


