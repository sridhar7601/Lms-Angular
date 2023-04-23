import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBodyComponent } from './home-body/home-body.component';
import { SpecificCourseComponent } from './specific-course/specific-course.component';
import { StackblitzComponent } from './stackblitz/stackblitz.component';
import { EventsComponent } from './events/events.component';
import { WheelSpinComponent } from './wheel-spin/wheel-spin.component';
import { ScratchCardComponent } from './scratch-card/scratch-card.component';
import { GitComponent } from './git/git.component';

const routes: Routes = [{
  path:"",component:HomeBodyComponent
},
{
  path:"specificCourse/:id",component:SpecificCourseComponent
},{
  path:"editor",component:StackblitzComponent
},{
  path:"events",component:EventsComponent
},{
  path:"spinme",component:WheelSpinComponent
},{
  path:"games",component:ScratchCardComponent
},{
  path:"git",component:GitComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
