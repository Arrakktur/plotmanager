import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "src/app/model/model.module";
import { ProjectsComponent } from "./projects.component";
import { CounterDirective } from "./counter.directive";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [ProjectsComponent, CounterDirective],
    exports: [ProjectsComponent]
})
export class ProjectModule{}