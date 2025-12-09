import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-image-preview',
  imports: [MatProgressSpinnerModule],
  templateUrl: './image-preview.html',
  styleUrl: './image-preview.css',
})
export class ImagePreview {

  private _snackBar = inject(MatSnackBar);
  data = inject(MAT_DIALOG_DATA);
  loaded = signal(false);

  // constructor() {
  //   console.log('ImagePreview data:', this.data);
  // }

  onImageLoad(img: HTMLImageElement) {
    // Wait until the image is fully decoded
    img.decode().then(() => {
      // Optionally wait one frame to make sure it's painted
      requestAnimationFrame(() => {
        this.loaded.set(true);
      });
    }).catch(() => {
      // fallback if decode fails
      // this.loaded.set(true);
      this.openSnackBar('Failed to load image.', 'Close');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
