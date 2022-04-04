import { Component } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProfileRepository } from 'src/app/model/data.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent{

  public projectPerPage = 4; // количество элементов на странице
  public selectedPage = 1; // страница по умолчанию

  constructor(
    private repository: ProfileRepository,
    private router: Router
  ) {}

  // Список проектов
  get projectList(): Project[] | undefined{
    // начальный элемент на странице
    let pageIndex = (this.selectedPage - 1) * this.projectPerPage;
    return this.repository.getProjectList().getProjects()?.slice(pageIndex, pageIndex + this.projectPerPage);
  }

  // массив номеров страниц
  get pageNumbers(): number[]{
    return Array(Math.ceil(this.repository.getProjectList().getSize() / this.projectPerPage)).fill(0).map((x, i) => i + 1);
  }

  // Получаем количество страниц
  get pageCount(): number{
    return Math.ceil(this.repository.getProjectList().getSize() / this.projectPerPage);
  }

  /**
   * Изменние текущей страницы
   * 
   * @param newPage {number} Номер страницы
   */
  changePage(newPage: number): void{
    this.selectedPage = newPage;
  }

  // Переход на детальную страницу проекта
  navigateToProject(project: string): void{
    this.router.navigateByUrl('/project-detail');
  }

  // Переход на страницу создания проекта
  navigateToAddProject(): void{
    this.router.navigateByUrl('/project-add');
  }

  // Удаление проекта
  removeProject(projectName: string, event: PointerEvent | MouseEvent): void{
    this.repository.removeProject(projectName);
    event.preventDefault();
  }
}
