import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  select: any;
  @Output() newTitle = new EventEmitter<string>();
  proposal: any;
  proposalForm: any;
  human:any = JSON.parse('{}');

  constructor(){ }

  ngOnInit(): void {
    this.includevalidation();
  }

  updateTitle(value: string) {
    this.newTitle.emit(value);
  }

  createproposal(){

  }

  includevalidation(){
    this.proposalForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      type: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      projecttitle: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      startdate: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      enddate: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      proposal: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
    });
  }
}
