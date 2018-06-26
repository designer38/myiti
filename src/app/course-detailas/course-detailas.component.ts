import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { DataService } from '../data.service';
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
    private transfer: TransferService,
    private q: DataService, 
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

  request(cid){
    let iid = localStorage.getItem('userId')
    let path: string = 
    'https://tal-company.herokuapp.com/InstructorReqOfferedCourse/requestcourse'
    return this.q.postDataHeader(path,{
      "instructorId": JSON.parse(iid),
      "courseId":JSON.parse(cid)  
    })
      .subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err);
      }
    
    )
  }


  cancel(cid){
    let iid = localStorage.getItem('userId')
    let path: string = 
    `https://tal-company.herokuapp.com/InstructorReqOfferedCourse/cancelCourseRequest?instructorId=${iid}&courseId=${cid}`
    return this.q.delete(path)
      .subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err);
      }
    
    )
  }
  ngOnInit() {
  }

}
