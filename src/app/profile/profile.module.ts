import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SnotifyModule, SnotifyService, ToastDefaults } from "ng-snotify";
import { ProfileComponent } from "./profile.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { IntroComponent } from "./intro/intro.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";
import { ContactComponent } from "./contact/contact.component";
import { NgxSpinnerModule } from "../../../node_modules/ngx-spinner";
import { ProjectsComponent } from "./projects/projects.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    ProjectsComponent,
  ],
  providers: [
    { provide: "SnotifyToastConfig", useValue: ToastDefaults },
    SnotifyService,
  ],
})
export class ProfileModule {}
