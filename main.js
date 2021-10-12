class Student {
    constructor({
        name, 
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        cursosAprobados = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.cursosAprobados = cursosAprobados;
        this.learningPaths = learningPaths;
    }
}
class LearningPaths {
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;        
    }
    agregarCurso(nuevoCursoAgregado){
        this.courses.push(nuevoCursoAgregado);           
    }
    elimininarCurso(nuevoCursoEliminado){
        this.courses.pop(nuevoCursoEliminado);           
    }
}
class Course {
    constructor({
        name,
        classes = [],
    }){
        this.name = name;
        this.classes = classes;        
    }
}
// Nuevas instancias de la clase Student, no importa el orden de los parametros (RORO).
const juan = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com", 
    twitter: "fjuandc", 
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaVideoJuegos,
    ],
});
const miguelito = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@miguelito.com", 
    instagram: "miguelito_feliz",
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaDataScientist,
    ], 
})
// Nuevas instancias de la clase LearningPath
const escuelaDesarrolloWeb = new LearningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitvoHTML,
        cursoPracticoHTML,
    ],
});
const escuelaDataScientist = new LearningPaths({
    name: "Escuela de Data Scientist",
    courses: [
        cursoProgBasica,
        "Curso de DataBusiness",
        "Curso de DataViz",
    ],
});
const escuelaVideoJuegos = new LearningPaths({
    name: "Escuela de Video Juegos",
    courses: [
        cursoProgBasica,
        "Curso de producción de Video Juegos",
        "Curso de Unity 3D",
    ],
});
// Nuevas instancias de la clase Course
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación básica",
    classes: [
        "1. Introducción",
        "2. Desarrollo básico",
        "3. Desarrollo avanzado",
    ],
});
const cursoDefinitvoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
    classes: [
        "1. Introducción",
        "2. Definitivo básico",
        "3. Definitivo avanzado",
    ],
});
const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
    classes: [
        "1. Introducción",
        "2. Práctico básico",
        "3. Práctico avanzado",
    ],
});
