import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {

  name: string;
  email: string;
  body: string;

  userInfo: any[] = [];

  commentForm: FormGroup

  constructor(
    private commentformBuilder: FormBuilder,
      private apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.initializeForm();
  }

  initializeForm()
  {
    this.commentForm = this.commentformBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: [''],
      body: ['']
  })
  }

  submitCommentForm(userForm: FormGroup)
  {
      const userComment = this.commentForm.value;

      return this.apiService.postComment(userComment).subscribe(
        user =>{
        console.log(user);
        this.initializeForm();
      })
      //this.userInfo.push(userDetails);
      console.log(this.userInfo);



  }

}




//   }

// }

