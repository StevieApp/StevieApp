import { ENTER } from '@angular/cdk/keycodes';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { CreateStoryService } from 'src/app/services/create-story.service';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-edit-stories',
  templateUrl: './edit-stories.component.html',
  styleUrls: ['./edit-stories.component.scss']
})
export class EditStoriesComponent implements OnInit {

  imagePickerConf = {
    borderRadius: "10px",
    language: "en",
    width: "100%",
    height: "40vh"
  };
  blog: any = JSON.parse('{}');
  initialImage:any = "../../../assets/stevieapp3.png";
  createStoryForm: any;
  meng: any = "../../../assets/stevieapp3.png";
  progress: { percentage: number } = { percentage: 0 };
  imageFile: any;
  savingStory: any = false;
  myMessage: any;
  loading: any;
  blogs: any;

  constructor(
    private saveBlog: CreateStoryService,
    private route: ActivatedRoute,
    private getStory: StoryService
  ) {
    this.route.params.subscribe(params => {
      var emo = params;
      this.getBlog(emo);
    });
  }

  ngOnInit(): void {
    this.blog.image = "../../../assets/stevieapp3.png";
    this.includevalidation();
  }

  onImageChange(vent: any){
    if(vent){
      this.imageFile = this.dataURLtoFile(vent, 'image.png');
      this.meng = this.dataURItoBlob(vent);
      var reader = new FileReader();
      reader.readAsDataURL(this.meng);
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.meng = event.target?.result;
      }
    } else{
      this.meng = "../../../assets/stevieapp3.png";
    }
  }

  createstory(){
    this.savingStory = true;
    if(this.blog.SubTopic){
      this.blog.imageURL = 'StevieApp/Blog/'+this.blog.Topic+'/'+this.blog.SubTopic+'/'+this.blog.Title;
    } else {
      this.blog.imageURL = 'StevieApp/Blog/'+this.blog.Topic+'/'+this.blog.Title;
    }
    this.saveBlog.saveImage(this.imageFile, null, this.blog.imageURL
    ).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / (event.total as number));
      } else if (event instanceof HttpResponse) {
        if(event.body?.toString().includes('naming')){
          this.myMessage = "Photo saved!";
          setTimeout(()=>{
            this.savestory();
          }, 500);
        } else{
          this.myMessage = "Could not upload photo!";
          this.reset();
        }
      }
    }, err=>{
      this.myMessage = "Network Issue!";
      this.reset();
    })
  }

  savestory(){
    this.saveBlog.saveStory(this.blog).subscribe(event => {
      if (event instanceof HttpResponse) {
        console.log(event.body?.toString());
        if (event.body?.toString().includes('written')){
          this.meng = "../../../assets/stevieapp3.png";
          document.getElementById('delete-img')?.click();
          this.blog = JSON.parse('{}')
          this.myMessage = "Profile saved!";
          this.reset();
        }else if(event.body?.toString().includes('write not done')){
          this.myMessage = "Could not save profile!";
          this.reset();
        } else {
          this.myMessage = "Could not save profile!";
          this.reset();
        }
      }
    }, err=>{
      this.myMessage = "Network Issue!";
      this.reset();
    })
  }

  reset(){
    setTimeout(()=>{
      this.myMessage = undefined;
      this.savingStory = false;
      this.progress = { percentage: 0 };
    },2000);
  }

  dataURLtoFile(dataurl:any, filename:any) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), 
      n = bstr.length, 
      u8arr = new Uint8Array(n);
        
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }

  dataURItoBlob(dataURI: any) {
    var arr = dataURI.split(',');
    const byteString = window.atob(arr[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });    
    return new File([blob], 'file.png', { type: 'image/png' });;
 }

  includevalidation(){
    this.createStoryForm = new FormGroup({
      title: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      topic: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      subtopic: new FormControl('',[
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      buttontext: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
      ]),
      buttonlink: new FormControl('',[
        Validators.required,
        Validators.minLength(7),
      ]),
      story: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
    });
  }

  // visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  previousblog: any;
  readonly separatorKeysCodes: number[] = [ENTER];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.blog.Tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.blog.Tags = [...new Set(this.blog.Tags)];
  }

  remove(tag:any): void {
    const index = this.blog.Tags.indexOf(tag);

    if (index >= 0) {
      this.blog.Tags.splice(index, 1);
    }
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
          this.previousblog = JSON.parse(JSON.stringify(this.blog));
          this.meng = this.blogs.imageURL;
          this.initialImage = `https://us-central1-reaphoster.cloudfunctions.net/app/api/files/getfile?filename=`+this.blog.imageURL+`.png`;
          this.loading = false;
        }
      }
    }, err=>{
      this.loading = false;
    })
  }

}
