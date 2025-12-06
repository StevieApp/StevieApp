import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EditStoriesComponent } from './pages/edit-stories/edit-stories.component';
import { HomeComponent } from './pages/home/home.component';
import { InterestsComponent } from './pages/interests/interests.component';
import { SocialsComponent } from './pages/socials/socials.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { UploadStoryComponent } from './pages/upload-story/upload-story.component';
import { StoriesComponent } from './stories/stories.component';
import { TeachieAppPrivacyPolicyComponent } from './pages/teachie-app-privacy-policy/teachie-app-privacy-policy.component';
import { AppPrivacyPolicyComponent } from './pages/app-privacy-policy/app-privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'socials', component: SocialsComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'portifolio', component: TechnologiesComponent },
  { path: 'upload-story', component: UploadStoryComponent },
  // { path: 'stories/:Title', component: StoriesComponent },
  // { path: 'editstories/:Title', component: EditStoriesComponent },
  { path: 'teachie-app-privacy-policy', component: TeachieAppPrivacyPolicyComponent },
  { path: 'app-privacy-policy', component: AppPrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
