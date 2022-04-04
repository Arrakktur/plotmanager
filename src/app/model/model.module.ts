import { NgModule } from "@angular/core";
import { ProfileRepository } from "./data.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [
        ProfileRepository,
        StaticDataSource
    ]
})
export class ModelModule {}