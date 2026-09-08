import { NgModule } from '@angular/core';

import { provideHttpClient, withInterceptorsFromDi, withXhr, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Markdown Renderer
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';

// Components
import { AppComponent } from './app.component';
import { LinksToolbarComponent } from './components/links-toolbar/links-toolbar.component';
import { ProjectMenuComponent } from './components/project-menu/project-menu.component';

// Directives
import { HoverFocusDirective } from './directives/hover-focus.directive';

// Pages
import { CallBlockerComponent } from './pages/call-blocker/call-blocker.component';
import { FlippingComponent } from './pages/flipping/flipping.component';
import { HomeComponent } from './pages/home/home.component';
import { LinksComponent } from './pages/links/links.component';
import { NewTabComponent } from './pages/new-tab/new-tab.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResumeComponent } from './pages/resume/resume.component';

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
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatTooltipModule,
        MarkdownComponent
    ], providers: [
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideMarkdown({
            loader: HttpClient,
        })
    ]
})
export class AppModule { }
