
export default class Settings {
    EnumEnvs = {
        Production: 'production',
        Development: 'development'
    }

    env = this.EnumEnvs.Production;  

    constructor() {
        if (document.location.hostname === "localhost") {
            this.env = this.EnumEnvs.Development;
        } 
    }

    getBasePath() {
        if (this.env === this.EnumEnvs.Development) {
            return "http://localhost:1337";
        }
        return "https://oskar-anderson.github.io/CV";
    }
}