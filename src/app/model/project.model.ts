/**
 * Класс проекта
 */
export class Project{
    constructor(
        private name: string,
        private description: string,
        private id?: number,
    ){}

    getName(): string{
        return this.name;
    }

    getDescription(): string{
        return this.description;
    }

    getId(): number | undefined{
        return this.id;
    }
}

/**
 * Класс списка проектов
 */
export class ProjectList{
    constructor(
        private projects: Project[] = [],
    ){}

    // Получить список проектов
    getProjects(): Project[] | undefined{
        return this.projects;
    }

    // Получить количетсво проектов
    getSize(): number{
        if (this.projects === undefined){
            return 0;
        } else {
            return this.projects.length;
        }
    }

    // Добавление проекта
    addProject(project: Project){
        this.projects?.push(project);
    }

    // Добавление списка проектов 
    addProjectList(projectList: Array<any>){
        projectList.forEach((project) => {
            let newProject = new Project(project.name, project.description, project.id);
            this.projects?.push(newProject);
        })
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

/**
 * Класс персонажа 
 */
export class Person{
    constructor(
        private name: string,
        private description: string,
        private id?: number,
    ){}

    getName(): string{
        return this.name;
    }

    getDescription(): string{
        return this.description;
    }

    getId(): number | undefined{
        return this.id;
    }

    setId(id: number): void{
        this.id = id;
    }
}