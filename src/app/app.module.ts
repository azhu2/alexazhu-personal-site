import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

// PDF viewer
import { PdfViewerModule } from 'ng2-pdf-viewer';

// Components
import { AppComponent } from './app.component';
import { ProjectMenuComponent } from './util/project-menu/project-menu.component';

// Directives
import { HoverFocusDirective } from './directives/hover-focus.directive';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { LinksComponent } from './pages/links/links.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NewTabComponent } from './pages/new-tab/new-tab.component';
import { CallBlockerComponent } from './pages/call-blocker/call-blocker.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HomeComponent,
    NotFoundComponent,
    LinksComponent,
    ProjectMenuComponent,
    HoverFocusDirective,
    NewTabComponent,
    CallBlockerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
