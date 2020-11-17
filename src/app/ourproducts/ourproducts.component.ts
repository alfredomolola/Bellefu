import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ourproducts',
  templateUrl: './ourproducts.component.html',
  styleUrls: ['./ourproducts.component.css']
})
export class OurproductsComponent implements OnInit {
  posts: any[] =[]

  constructor(
    private apiService:ApiService
  ) { }

  ngOnInit(): void {

   this.getposts();
    }


  getposts(){
    return this.apiService.getResource().subscribe(data=>{
      this.posts=(data);
    },err =>{
      console.log(err);

    } )

  }

}
