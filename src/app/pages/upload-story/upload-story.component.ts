import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-story',
  templateUrl: './upload-story.component.html',
  styleUrls: ['./upload-story.component.scss']
})
export class UploadStoryComponent implements OnInit {

  imagePickerConf = {
    borderRadius: "10px",
    language: "en",
    width: "100%",
    height: "40vh"
  };
  blog: any = JSON.parse('{}');
  initialImage:any = "../../../assets/stevieapp3.png";
  createStoryForm: any;

  constructor() { }

  ngOnInit(): void {
    this.blog.image = "../../../assets/stevieapp3.png";
    this.includevalidation();
  }

  onImageChange(vent: any){
    this.blog.image = this.dataURLtoFile(vent, 'image.png');
  }

  createstory(){
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
        Validators.minLength(10),
      ]),
      story: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
    });
  }

}
