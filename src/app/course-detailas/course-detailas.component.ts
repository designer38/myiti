import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-course-detailas',
  templateUrl: './course-detailas.component.html',
  styleUrls: ['./course-detailas.component.scss']
})
export class CourseDetailasComponent implements OnInit {
  detailsData: Array<object>
  workspaceData: Array<object>
  singelData:object
  singelCourse: Array<object>
  constructor(
    private transfer: TransferService
  ) { 
    let courseId = localStorage.getItem('courseId')
    this.detailsData = this.transfer.getData();
    this.singelData;
    this.singelCourse=[];
    for (let index in this.detailsData) {
      if(courseId == this.detailsData[index]['offeredCourseId'])
      {
        this.singelData = this.detailsData[index]
      }
    }   
    this.singelCourse.push(this.singelData)
    console.log(this.singelCourse)

  }

  ngOnInit() {
  }

}
