export class Profile{

    constructor(
        private login: string,
        private password: string,
        private name: string,
    ){}

    getLogin(): string {
        return this.login;
    }
    
    getPassword(): string {
        return this.password;
    }

    getName(): string {
        return this.name;
    }
}