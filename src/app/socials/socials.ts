import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-socials',
  imports: [MatGridListModule, MatButtonModule],
  templateUrl: './socials.html',
  styleUrl: './socials.css',
})
export class Socials {

}
