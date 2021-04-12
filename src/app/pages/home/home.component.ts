import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  projectTitle = '';

  constructor() { }

  ngOnInit(): void {
  }

  updateTitle(newTitle: any){
    this.projectTitle = newTitle;
  }

  // onImagesLoaded() {
  //   var container = document.getElementById("container");
  //   var images = container?.getElementsByTagName("img");
  //   var loaded = images?.length;
  //   for (var i = 0; i < (images as HTMLCollectionOf<HTMLImageElement>).length; i++) {
  //     console.log(loaded);
  //     if ((images as HTMLCollectionOf<HTMLImageElement>)[i].complete) {
  //         (loaded as number)--;
  //     }else {
  //       (images as HTMLCollectionOf<HTMLImageElement>)[i].addEventListener("load", ()=> {
  //         (loaded as number)--;
  //         if (loaded == 0) {
  //           console.log('image loaded');
  //         }
  //       });
  //     }
  //     if (loaded == 0) {
  //       console.log("All the images have loaded");
  //     }
  //   }
  // }

}

