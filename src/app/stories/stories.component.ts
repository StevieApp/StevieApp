import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  loading:any;
  blogs: any;
  blog: any;

  constructor(
    private route: ActivatedRoute,
    private getStory: StoryService
  ) {
    this.route.params.subscribe(params => {
      var emo = params;
      this.getBlog(emo);
    });
  }

  ngOnInit(): void {
  }

  getBlog(emo: any){
    this.getStory.getSingleStory(emo).subscribe(event=>{
      this.loading = true;
      if(event instanceof HttpResponse){
        if(event.body?.toString().includes('No listings found')){
          this.loading = false;
        } else if(event.body?.toString().includes('could not retrieve results')) {
          this.loading = false;
        } else if(event.body?.toString()){
          this.blogs = JSON.parse(event.body?.toString());
          this.blog = this.blogs[0];
          this.loading = false;
        }
      }
    }, err=>{
      this.loading = false;
    })
  }

}
