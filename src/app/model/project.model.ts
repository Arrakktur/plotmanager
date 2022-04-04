export class Project{
    constructor(
        private name: string,
        private description: string,
    ){}

    getName(): string{
        return this.name;
    }

    getDescription(): string{
        return this.description;
    }
}

export class ProjectList{
    constructor(
        private projects?: Project[],
    ){}

    getProjects(): Project[] | undefined{
        return this.projects;
    }

    getSize(): number{
        if (this.projects === undefined){
            return 0;
        } else {
            return this.projects.length;
        }
    }

    // Поиск элемента в массиве по имени
    getProject(projectName: string): Project | undefined{
        return this.projects?.find((element) => {
            if (element.getName() == projectName){
                return element;
            }
            return undefined;
        })
    }

    // Возвращает индекс элемента
    getProjectIndex(projectName: string): number | undefined{
        return this.projects?.findIndex((element, index) => {
            if (element.getName() == projectName) return true;
            return false;
        });
    }

    // Удаление элемента из массива по индексу
    removeProjectIndex(index: number): void{
        this.projects?.splice(index, 1);
    }

    // Удаление элемента из массива по названию
    removeProjectName(projectName: string): void{
        let index = this.getProjectIndex(projectName);
        if (index !== undefined){
            this.removeProjectIndex(index);
        }
    }
}