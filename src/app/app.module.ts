import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

// PDF viewer
import { PdfViewerModule } from 'ng2-pdf-viewer';

// Markdown Renderer
import { MarkdownModule } from 'ngx-markdown';

// Components
import { AppComponent } from './app.component';
import { ProjectMenuComponent } from './components/project-menu/project-menu.component';
import { LinksToolbarComponent } from './components/links-toolbar/links-toolbar.component';

// Directives
import { HoverFocusDirective } from './directives/hover-focus.directive';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { LinksComponent } from './pages/links/links.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NewTabComponent } from './pages/new-tab/new-tab.component';
import { CallBlockerComponent } from './pages/call-blocker/call-blocker.component';
import { FlippingComponent } from './pages/flipping/flipping.component';

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
    CallBlockerComponent,
    LinksToolbarComponent,
    FlippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    PdfViewerModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: {},
        useValue: {
          grm: true,
          smartypants: true
        }
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
