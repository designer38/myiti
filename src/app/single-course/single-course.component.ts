import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { last } from 'rxjs/internal/operators/last';


@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.scss']
})
export class SingleCourseComponent implements OnInit {
public myCourse:any;
public course;

  constructor(private transfer: TransferService) {
   this.myCourse= localStorage.getItem('userCourse');
   this.course=JSON.parse(this.myCourse);

console.log(this.course)    


   }

  ngOnInit() {
  }

}
