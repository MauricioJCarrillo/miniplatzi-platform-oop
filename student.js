export default class Student {
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