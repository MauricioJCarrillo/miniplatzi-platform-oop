// Creamos el obejto literal natalia
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS"
    ],
    aprobarCurso(nuevoCursoAprovado){
        this.cursosAprobados.push(nuevoCursoAprovado); 
    },
};
// Método que hace que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");
// Creación del prototipo "Student" para crear instancias "copias" de objetos
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // Los metodos dentro de los prototipos se aconseja colocarlos por fuera.
    // this.aprobarCurso = function (nuevoCursoAprovado) {
    //     this.cursosAprobados.push(nuevoCursoAprovado);
    // }
}
// Método del prototipo Student utilizado por fuera del prototipo
Student.prototype.aprobarCurso = function (nuevoCursoAprovado) {
    this.cursosAprobados.push(nuevoCursoAprovado);
}
// Creación de una instancia del prototipo Student
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a la producción de Videojuegos",
        "Curso de Creación de Personajes",
    ],
);
// Prototipo con la sintaxis de clases
class Student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCursoAprovado) {
        this.cursosAprobados.push(nuevoCursoAprovado);
    }    
}
// Creación de instancia del prototipo Clase Student2
const miguelito = new Student2(
    "Miguel",
    28,
    [
        "Curso Análisis de Negocios para Ciencia de Datos",
        "Curso de Principios de Visualización de Datos para BI",
    ],
); 
// Otros objetos literales
const juan1 = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined,        
    },
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Curso de responsive design",
            ],
        },
        {
            name: "Escuela de Video Juegos",
            courses: [
                "Curso Introducción a la producción de Vjs",
                "Curso de Unreal Engine",
                "Curso de Unity 3D",
            ],
        },
    ],
}
const miguelito1 = {
    name: "Miguelito",
    username: "miguelitofeliz",
    points: 1000,
    socialMedia: {
        twitter: "miguelitofeliz",
        instagram: "miguelito_feliz",
        facebook: undefined,        
    },
    cursosAprobados: [
        "Curso DataBusiness",
        "Curso DataViz",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Curso de responsive design",
            ],
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso DataBusiness",
                "Curso DataViz",
                "Curso Tableau",
            ],
        },
    ],
}