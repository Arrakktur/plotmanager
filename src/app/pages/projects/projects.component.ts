import { Component } from '@angular/core';
import { Project, ProjectList } from 'src/app/model/project.model';
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
  public projectList: ProjectList = new ProjectList;

  constructor(
    private repository: ProfileRepository,
    private router: Router
  ) {
    this.getProjectList();
  }

  // Получаем список проектов
  getProjectList(){
    // начальный элемент на странице
    let pageIndex = (this.selectedPage - 1) * this.projectPerPage;
    this.repository.getProjectList().subscribe((data) => {
      let list = JSON.parse(data).slice(pageIndex, pageIndex + this.projectPerPage);
      this.projectList.addProjectList(list);
    })
  }

  // массив номеров страниц
  get pageNumbers(): number[]{
   return Array(Math.ceil(this.projectList.getSize() / this.projectPerPage)).fill(0).map((x, i) => i + 1);
  }

  // Получаем количество страниц
  get pageCount(): number{
    return Math.ceil(this.projectList.getSize() / this.projectPerPage);
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
  navigateToProject(project: number | undefined): void{
    if (project != undefined){
      this.router.navigateByUrl(`/project-detail?projectId=${project}`);
    }
  }

  // Переход на страницу создания проекта
  navigateToAddProject(): void{
    this.router.navigateByUrl('/project-add');
  }

  // Удаление проекта
  removeProject(projectName: string, event: PointerEvent | MouseEvent): void{
    this.projectList.removeProjectName(projectName);
  }
}
