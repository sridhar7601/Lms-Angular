import { Component ,OnInit,ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeeksService } from '../weeks.service';
import { SharedDataService } from '../shared-data.service';
import { SpecificContentComponent } from "../specific-content/specific-content.component";
@Component({
  selector: 'app-specific-course',
  templateUrl: './specific-course.component.html',
  styleUrls: ['./specific-course.component.css'],
})
export class SpecificCourseComponent {
  @ViewChild('specificContent') specificContent!: SpecificContentComponent;
  sidebarVisible1 = false;


  // selectedCategories: any[] = [];
  week: any;
  Id!: any;
  weekId!:any
  // categories: any[] = [
  //     { name: 'Accounting', key: 'A' },
  //     { name: 'Marketing', key: 'M' },
  //     { name: 'Production', key: 'P' },
  //     { name: 'Research', key: 'R' }
  // ];
  isUnlocked = false;
  onUnlockCodeEntered() {
    // Check if the entered code matches the admin-provided code
    if ('admin123' == 'admin123') {
      // Set the isUnlocked variable to true
      this.isUnlocked = true;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private apiurl: WeeksService,
    private sharedData: SharedDataService

  ) {


  }
  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get('id') || 0;
    this.apiurl.getweeks(this.Id).subscribe((res: any) => {
      this.week = res;
      console.log(this.week, 'week');
      this.onUnlockCodeEntered()
      this.onButtonClick( 1 )
    });
  }

  // onButtonClick1(weekid: any):void {
    // this.sharedData.selectedId = this.weekid;
    // console.log(weekid,"passing to service")
    // this.childComponent.refresh();
  // }

  onButtonClick(selectedId: any): void {
    this.sharedData.selectedId = selectedId;
    console.log(selectedId, "passing to service");
    this.specificContent.refresh();
  }


}
