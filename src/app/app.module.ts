import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

// ng2-pdf-viewer
import { PdfViewerModule } from 'ng2-pdf-viewer';

// Components
import { AppComponent } from './app.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LinksComponent } from './pages/links/links.component';
import { ProjectMenuComponent } from './util/project-menu/project-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HomeComponent,
    NotFoundComponent,
    LinksComponent,
    ProjectMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
