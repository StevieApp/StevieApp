import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/types/animations';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InterestsComponent } from './pages/interests/interests.component';
import { SocialsComponent } from './pages/socials/socials.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { MatSidenavModule } from '@angular/material/types/sidenav';
import { MatButtonModule } from '@angular/material/types/button';
import { MatIconModule } from '@angular/material/types/icon';
import { MatGridListModule } from '@angular/material/types/grid-list';
import { MatDividerModule } from '@angular/material/types/divider';
import { MatCardModule } from '@angular/material/types/card';
import { MatListModule } from '@angular/material/types/list';
import { MatFormFieldModule } from '@angular/material/types/form-field';
import { MatInputModule } from '@angular/material/types/input';
import { MatSelectModule } from '@angular/material/types/select';
import { MatDatepickerModule } from '@angular/material/types/datepicker';
import { MatChipsModule } from '@angular/material/types/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/types/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadStoryComponent } from './pages/upload-story/upload-story.component';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { HttpClientModule } from '@angular/common/types/http';
import { StoriesComponent } from './stories/stories.component';
import { EditStoriesComponent } from './pages/edit-stories/edit-stories.component';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    InterestsComponent,
    SocialsComponent,
    TechnologiesComponent,
    UploadStoryComponent,
    StoriesComponent,
    EditStoriesComponent,
  ],
  exports:[],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    NgpImagePickerModule,
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatChipsModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7472597196511498',
      //adSlot: 7259870550,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
