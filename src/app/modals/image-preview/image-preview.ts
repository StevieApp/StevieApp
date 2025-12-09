import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-image-preview',
  imports: [MatProgressSpinnerModule],
  templateUrl: './image-preview.html',
  styleUrl: './image-preview.css',
})
export class ImagePreview {
  data = inject(MAT_DIALOG_DATA);
  loaded = signal(false);
  constructor() {
    console.log('ImagePreview data:', this.data);
  }
}
