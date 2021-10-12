export default class LearningPaths {
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