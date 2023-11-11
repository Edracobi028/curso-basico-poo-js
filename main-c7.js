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
        name = undefined,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
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

//Creamos una instancia del prototipo u objeto
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: "Curso Definitivo de HTML y CSS",
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: "Curso DataBusiness",
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: "Curso Introducción a la Producción de video juegos",
});

