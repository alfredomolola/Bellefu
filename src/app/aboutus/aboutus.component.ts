import { Component, OnInit } from '@angular/core';

import{ApiService} from '../services/api.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

users:any[] = [];
  constructor(
    private apiservice: ApiService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    return this.apiservice.getUser().subscribe(data=>{
      this.users = data;
      }, err=> {
        console.log(err);
       })
      }

}
