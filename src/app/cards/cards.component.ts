import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { CoursecardsService } from "../coursecards.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  contents: any;
  constructor(private apiurl:CoursecardsService){}

  ngOnInit(): void {
    this.apiurl.getcourses().subscribe((res)=>{
      console.log(res);
      this.contents=res;
    })
  }
}
