import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.scss']
})
export class FormCourseComponent implements OnInit {
	offeredCourse = {
		"description" : "",
		"endDate" : "",
		"startDate" : "",
		"cost":"",
		"durationHours":"",
		"name":"",
		"categoryId":{
			"categoryId":""
		},
		"noOfApplicant":"",

		"hostingWorkSpaceId":{"workSpaceId":1}

         	};
	
  constructor(private Data:DataService,
              private CategoryService:CategoryService) {

							}
			  categories: Array<Category> = []
			  
	 postCourse(data){
		 console.log(data) 
		 let offeredCourse = {
			"description" : data.description
			,
			"endDate" : data.endDate,
			"startDate" : data.startDate,
			"cost": data.cost,
			"durationHours":data.durationHours,
			"name":data.name,
			"categoryId":{
				"categoryId": data.cats
			},
			"noOfApplicant":data.noOfApplicant,
	
			"hostingWorkSpaceId":{"workSpaceId":1}
	
						 };

						 console.log(offeredCourse)


		 this.Data.formCrs(offeredCourse).subscribe(
			 (response) => {console.log(response)},
			 (error) => {console.log(error)}
	)}//post the data 
	
  ngOnInit() {
	this.CategoryService.GetCategories().subscribe((cats: Array<Category>) => {
		cats.forEach(c => this.categories.push(c))
		console.log(cats)
	  }, err => {
		// console.log("categotries")
		console.log(err)
		// work service local
		
	  }
		)
		

  }

}
