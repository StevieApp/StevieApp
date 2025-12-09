import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule, MatCardTitle } from "@angular/material/card";
import { MatDialog } from '@angular/material/dialog';
import { ImagePreview } from '../modals/image-preview/image-preview';

@Component({
  selector: 'app-design-images',
  imports: [MatCardModule, MatCard, MatCardTitle, MatButtonModule],
  templateUrl: './design-images.html',
  styleUrl: './design-images.css',
})
export class DesignImages {
  readonly dialog = inject(MatDialog);
  designs: Array<{title: string, imageUrl: string, thumbNailUrl?: string, type?: string, description?: string}> = [
    { title: 'The Gospel: A Warning', thumbNailUrl: '/assets/designs/thumbs/Yeshua 3-01.png', imageUrl: '/assets/designs/Yeshua 3-01.png', type: 'Poster', description: 'A poster design showing Jesus\' suffering to gain salvation and warning about the end times and the return of Jesus Christ.' },
    { title: 'Hiking Advert', thumbNailUrl: '/assets/designs/thumbs/ZION HIKING ADVERT-01.png', imageUrl: '/assets/designs/ZION HIKING ADVERT-01.png', type: 'Poster' },
    { title: 'SKATERENA', thumbNailUrl: '/assets/designs/thumbs/Skate wt 1-01.png', imageUrl: '/assets/designs/Skate wt 1-01.png', type: 'Poster' },
    { title: 'Called By The Board Full, White Background', thumbNailUrl: '/assets/designs/thumbs/Skate glass 333.png', imageUrl: '/assets/designs/Skate glass 333.png', type: 'Poster' },
    { title: 'Beauty Banner', thumbNailUrl: '/assets/designs/thumbs/banner beauty try 2-01.png', imageUrl: '/assets/designs/banner beauty try 2-01.png', type: 'Brochure' },
    { title: 'Beauty Banner', thumbNailUrl: '/assets/designs/thumbs/banner beauty try 3-01.png', imageUrl: '/assets/designs/banner beauty try 3-01.png', type: 'Brochure' },
    { title: 'Tear', thumbNailUrl: '/assets/designs/thumbs/FIN 12-01.png', imageUrl: '/assets/designs/FIN 12-01.png', type: 'Brochure' },
    { title: 'Tear Colored', thumbNailUrl: '/assets/designs/thumbs/FIN 1-01.png', imageUrl: '/assets/designs/FIN 1-01.png', type: 'Brochure' },
    { title: 'Tear', thumbNailUrl: '/assets/designs/thumbs/FIN 1111-01.png', imageUrl: '/assets/designs/FIN 1111-01.png', type: 'Brochure' },
    { title: 'Tear', thumbNailUrl: '/assets/designs/thumbs/FIN 2222-01.png', imageUrl: '/assets/designs/FIN 2222-01.png', type: 'Brochure' },
    { title: 'Called By The Board No Background', thumbNailUrl: '/assets/designs/thumbs/Skate glass 111-01.png', imageUrl: '/assets/designs/Skate glass 111-01.png', type: 'Poster' },
    { title: 'Spiderman Gwen Poster', thumbNailUrl: '/assets/designs/thumbs/SPIDERMAN-01.png', imageUrl: '/assets/designs/SPIDERMAN-01.png', type: 'Poster' },
    { title: 'Called By The Board White Background', thumbNailUrl: '/assets/designs/thumbs/Skate glass 222-01.png', imageUrl: '/assets/designs/Skate glass 222-01.png', type: 'Poster' },
    { title: 'Sing For Jesus Event', thumbNailUrl: '/assets/designs/thumbs/JEREMY-01.png', imageUrl: '/assets/designs/JEREMY-01.png', type: 'Brochure' },
    { title: 'Called By The Board Full, No Background', thumbNailUrl: '/assets/designs/thumbs/Skate glass 121.png', imageUrl: '/assets/designs/Skate glass 121.png', type: 'Banner' },
    { title: 'SKATERENA', thumbNailUrl: '/assets/designs/thumbs/Skate wt-01.png', imageUrl: '/assets/designs/Skate wt-01.png', type: 'Banner' },
    { title: 'TEAR SMALL', thumbNailUrl: '/assets/designs/thumbs/TEAR1-01.png', imageUrl: '/assets/designs/TEAR1-01.png', type: 'Banner' },
    { title: 'TEAR', thumbNailUrl: '/assets/designs/thumbs/TEAR333-01.png', imageUrl: '/assets/designs/TEAR333-01.png', type: 'Banner' },

  ];

  previewImage(imageUrl: string): void {
    MatDialog
    const imageWindow = window.open('', '');
    if (imageWindow) {
      imageWindow.document.write(`<img src="${imageUrl}" style="width:100%;">`);
    }
  }

  openDialog(imageUrl: string): void {
    const dialogRef = this.dialog.open(ImagePreview, {
      data: {imageUrl},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
