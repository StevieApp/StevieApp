import { AppPrivacyPolicy } from './app-privacy-policy/app-privacy-policy';
import { Routes } from '@angular/router';
import { TeachieAppPrivacyPolicy } from './teachie-app-privacy-policy/teachie-app-privacy-policy';
// import { Blog } from './blog/blog';
// import { Contact } from './contact/contact';
import { Home } from './home/home';
// import { Socials } from './socials/socials';
// import { Technologies } from './technologies/technologies';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'teachie-app-privacy-policy', component: TeachieAppPrivacyPolicy },
  { path: 'app-privacy-policy', component: AppPrivacyPolicy },
];
