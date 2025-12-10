import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { Socials } from "../socials/socials";
import { Technologies } from "../technologies/technologies";
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Contact } from "../contact/contact";
import { DesignImages } from "../design-images/design-images";
import { Portfolio } from "../portfolio/portfolio";

@Component({
  selector: 'app-home',
  imports: [MatDivider, Socials, Technologies, MatGridTile, MatIcon, MatGridList, MatButtonModule, Contact, DesignImages, Portfolio],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  projectTitle: string = '';

  updateTitle(newTitle: any){
    this.projectTitle = newTitle;
  }
}
