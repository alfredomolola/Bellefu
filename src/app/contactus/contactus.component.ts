import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  id:string;
 title:string;
  body:string;
  contactInfo: any=[];
  contactForm:FormGroup;
  constructor(
    private apiService:ApiService,
    private contactFormBuilder:FormBuilder
  ) { }

  ngOnInit(): void {

      this.initializeForm();

  }

  initializeForm(){
    this.contactForm=this.contactFormBuilder.group({
      id:['', Validators.required],
     title:[''],
     body:[]
    });
  }
  submit(contactForm:FormGroup) {
    const payload = contactForm.value
    // this.contactInfo.push(payload);
    // this.initializeForm()
    // console.log(contactForm)
    // this.initializeForm();
    return this.apiService.postResource(payload).subscribe(
      res=>{
        console.log(res);
        this.initializeForm();
      }
    )

  }

  delete(i){
    this.contactInfo.splice(i,1)
  }

  edit(item:any,i){
    // this.nam = item.name
    // this.email= item.email
    // this.message=item.message

  }

}
