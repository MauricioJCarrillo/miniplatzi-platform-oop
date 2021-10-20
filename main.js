// Creación de la Clase - Prototipo Comment
class Comment {
    constructor({
        studentName,
        studentRole = "Estudiante",
        content,
    }){
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.content = content;
        this.likes = 0;
    }
    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}
// Creación de la Clase - Prototipo PlatziClass
class PlatziClass {
    constructor({
        name,
        videoID,        
    }){
        this.name = name;
        this.videoID = videoID;
    }
    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }
}
function videoPlay(id) {
    const urlSecreta = "https://platziultrasecreto.com";
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}
function videoStop(id) {
    const urlSecreta = "https://platziultrasecreto.com";
    console.log("Pausamos la url " + urlSecreta);
}
// Nuevas instancias de la clase Class
const clase67 = new PlatziClass({
    name: "JavaScript: Orientado a prototipos",
    videoID: "555555",
});
// Creación de la Clase - Prototipo Course
class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.classes = classes;        
        this.isFree = isFree;        
        this.lang = lang;        
    }
    get name() {
        return this._name;
    }
    set name(nuevoNombre) {
        if(nuevoNombre === "Curso Malito de programación Básica"){
            console.error("Wey... no");
        }else{
            this._name = nuevoNombre;            
        }
        this._name = nuevoNombre;
    }
}
// Nuevas instancias de la clase Course
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación básica",
    classes: [
        "1. Introducción",
        "2. Desarrollo básico",
        "3. Desarrollo avanzado",
    ],
    isFree: true,
    lang: "english",
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
    lang: "english",
});
// Creación de la Clase - Prototipo LearningPaths
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
// Creación de la Clase - Prototipo Student
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
    publicarComentario(contenidoComentario) {
        const comentario = new Comment({
            content: contenidoComentario,
            studentName: this.name,
        });
        comentario.publicar();
    }
}
//Herencia de JS: Nuevas clases que heredan los atributos y metodos de la clase Student
class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }
    aprobarCurso(nuevoCurso) {
        if(nuevoCurso.isFree) {
            this.cursosAprobados.push(nuevoCurso);
        }else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos gratuitos");
        }
    }
}
class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }
    aprobarCurso(nuevoCurso) {
        if(nuevoCurso.lang !== "english") {
            this.cursosAprobados.push(nuevoCurso);
        }else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
        }
    }
}
class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}
class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
    publicarComentario(contenidoComentario) {
        const comentario = new Comment({
            content: contenidoComentario,
            studentName: this.name,
            studentRole: "Profesor", 
        });
        comentario.publicar();
    }
}
// Nuevas instancias de la clase Student, no importa el orden de los parametros (RORO).
const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com", 
    twitter: "fjuandc", 
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaVideoJuegos,
    ],
});
const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@miguelito.com", 
    instagram: "miguelito_feliz",
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaDataScientist,
    ], 
}) 
const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "Freddier",
    email: "freddyvega@platzi.com", 
    instagram: "freddiervega", 
}) 