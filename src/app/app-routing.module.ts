import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { InterestsComponent } from './pages/interests/interests.component';
import { SocialsComponent } from './pages/socials/socials.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'socials', component: SocialsComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'portifolio', component: TechnologiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
