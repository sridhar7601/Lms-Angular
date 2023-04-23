import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { CoursecardsService } from "../coursecards.service";
@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent {
  sidebarVisible1 = false;

  // cards = [
  //   { icon: '/sites/all/themes/programiz/assets/python.svg', title: 'Python Programming' },
  //   { icon: '/sites/all/themes/programiz/assets/java.svg', title: 'Java Programming' },
  //   { icon: '/sites/all/themes/programiz/assets/javascript.svg', title: 'JavaScript Programming' },
  //   { icon: '/sites/all/themes/programiz/assets/php.svg', title: 'PHP Programming' },
  //   { icon: '/sites/all/themes/programiz/assets/c.svg', title: 'C Programming' }
  // ];

  // showAllCards = false;

  // showMoreCards() {
  //   this.showAllCards = true;
  // }
  name: any;
  constructor(private apiurl:CoursecardsService){}

  ngOnInit(): void {
    this.apiurl.getcourses().subscribe((res)=>{
      console.log(res);
      this.name=res;
      console.log(this.name)
    })
  }
}
