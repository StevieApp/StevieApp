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
    { title: 'Sing For Jesus Event', thumbNailUrl: '/assets/designs/thumbs/JEREMY-01.png', imageUrl: '/assets/designs/JEREMY-01.png', type: 'Brochure', description: 'A brochure design for a worship event featuring lovely singers, highlighting the date, location, and theme of the event.' },
    { title: 'Hiking Advert', thumbNailUrl: '/assets/designs/thumbs/ZION HIKING ADVERT-01.png', imageUrl: '/assets/designs/ZION HIKING ADVERT-01.png', type: 'Poster', description: 'A poster design promoting hiking in Mt Kilimanjaro, featuring scenic imagery and key information for hikers set up by Zion Hikers.' },
    { title: 'SKATERENA', thumbNailUrl: '/assets/designs/thumbs/Skate wt 1-01.png', imageUrl: '/assets/designs/Skate wt 1-01.png', type: 'Poster', description: 'A vibrant poster design for SKATERENA, showcasing dynamic skateboarding action and event details to attract skate enthusiasts.' },
    { title: 'Called By The Board Full, White Background', thumbNailUrl: '/assets/designs/thumbs/Skate glass 333.png', imageUrl: '/assets/designs/Skate glass 333.png', type: 'Poster', description: 'A striking poster design titled "Called By The Board," featuring a skateboarder with a white background, emphasizing the thrill and culture of skateboarding.' },
    { title: 'Beauty Banner', thumbNailUrl: '/assets/designs/thumbs/banner beauty try 2-01.png', imageUrl: '/assets/designs/banner beauty try 2-01.png', type: 'Brochure', description: 'A visually appealing brochure design for a beauty banner, highlighting elegance and style with a focus on aesthetic presentation.' },
    { title: 'Beauty Banner Black Background', thumbNailUrl: '/assets/designs/thumbs/banner beauty try 3-01.png', imageUrl: '/assets/designs/banner beauty try 3-01.png', type: 'Brochure', description: 'A sleek brochure design for a beauty banner set against a black background, conveying sophistication and modern beauty trends.' },
    { title: 'Tear', thumbNailUrl: '/assets/designs/thumbs/FIN 12-01.png', imageUrl: '/assets/designs/FIN 12-01.png', type: 'Brochure', description: 'A compelling brochure design titled "Tear," featuring emotional and impactful imagery to convey its message effectively. A preamptive puddle and tear.' },
    { title: 'Tear Monchkin Colored', thumbNailUrl: '/assets/designs/thumbs/FIN 1111-01.png', imageUrl: '/assets/designs/FIN 1111-01.png', type: 'Brochure', description: 'A colorful brochure design for "Tear," utilizing vibrant colors to attract attention and convey a lively theme, pancake colored.' },
    { title: 'Tear Colored', thumbNailUrl: '/assets/designs/thumbs/FIN 1-01.png', imageUrl: '/assets/designs/FIN 1-01.png', type: 'Brochure', description: 'A colorful brochure design titled "Tear," featuring a palette that enhances the visual appeal and emotional impact of the content.' },
    { title: 'Tear Aftermath', thumbNailUrl: '/assets/designs/thumbs/FIN 2222-01.png', imageUrl: '/assets/designs/FIN 2222-01.png', type: 'Brochure', description: 'A dramatic brochure design for "Tear," capturing the essence of aftermath through powerful imagery and thoughtful layout. Tear still dropping and a puddle and what\'s left is the aftermath.' },
    { title: 'Called By The Board No Background', thumbNailUrl: '/assets/designs/thumbs/Skate glass 111-01.png', imageUrl: '/assets/designs/Skate glass 111-01.png', type: 'Poster', description: 'A dynamic poster design titled "Called By The Board," featuring a skateboarder with no background, emphasizing the action and energy of skateboarding culture.' },
    { title: 'Spiderman Gwen Poster', thumbNailUrl: '/assets/designs/thumbs/SPIDERMAN-01.png', imageUrl: '/assets/designs/SPIDERMAN-01.png', type: 'Poster', description: 'A vibrant poster design featuring Spidey and Gwen from Spiderman, showcasing dynamic artwork and appealing to fans of the franchise. Cant Wait to See.😉' },
    { title: 'Called By The Board White Background', thumbNailUrl: '/assets/designs/thumbs/Skate glass 222-01.png', imageUrl: '/assets/designs/Skate glass 222-01.png', type: 'Poster', description: 'A captivating poster design titled "Called By The Board," featuring a skateboarder against a white background, highlighting the sport\'s excitement and culture.' },
    { title: 'Called By The Board Full, No Background', thumbNailUrl: '/assets/designs/thumbs/Skate glass 121.png', imageUrl: '/assets/designs/Skate glass 121.png', type: 'Banner', description: 'A full-body poster design titled "Called By The Board," featuring a skateboarder with no background, emphasizing the thrill and culture of skateboarding.' },
    { title: 'SKATERENA', thumbNailUrl: '/assets/designs/thumbs/Skate wt-01.png', imageUrl: '/assets/designs/Skate wt-01.png', type: 'Banner', description: 'A vibrant banner design for SKATERENA, showcasing dynamic skateboarding action and event details to attract skate enthusiasts.' },
    { title: 'TEAR', thumbNailUrl: '/assets/designs/thumbs/TEAR333-01.png', imageUrl: '/assets/designs/TEAR333-01.png', type: 'Banner', description: 'A compelling banner design titled "TEAR," featuring emotional and impactful imagery to convey its message effectively. A colorful T-themed image of a tear with vision of the world as a reflection.' },
    { title: 'TEAR SMALL', thumbNailUrl: '/assets/designs/thumbs/TEAR1-01.png', imageUrl: '/assets/designs/TEAR1-01.png', type: 'Banner', description: 'An amazing banner design titled "TEAR," capturing the essence of the theme in a colorful impactful and emotional delivery.' },

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
