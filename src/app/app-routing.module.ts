import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { LinksComponent } from './pages/links/links.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NewTabComponent } from './pages/new-tab/new-tab.component';
import { CallBlockerComponent } from './pages/call-blocker/call-blocker.component';
import { FlippingComponent } from './pages/flipping/flipping.component';

const routes: Routes = [
    { path: '',                       component: HomeComponent, pathMatch: 'full' },
    { path: 'resume',                 component: ResumeComponent },
    { path: 'links',                  component: LinksComponent },
    { path: 'projects/new-tab',       component: NewTabComponent },
    { path: 'projects/call-blocker',  component: CallBlockerComponent },
    { path: 'projects/538-flipping',  component: FlippingComponent },
    { path: '**',                     component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
