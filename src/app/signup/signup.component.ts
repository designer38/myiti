import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
//	slectedFile: File = null;
	
WorkSpace = {
		"name" : "",
		"fileupload" : "",
		"email":"",
		"Password" : "",
		"city" : "",
		"description" : "",
		"startTime" : "",
		"closingTime" : "",
		"number" : "",
		"facebookPageUrl" : "",
		"holiday" : "",
		"noOfRooms":"",
		"workSpacePhonesCollection" : ""
	};
	
  constructor(private Data: DataService,
			  private http:HttpClient) { 
  }
	
	onSave(){
		 this.Data.PostData(this.WorkSpace).subscribe(
			 (response) => {console.log(response)},
			 (error) => {console.log(error)}
	)}//post the data 
    
	
	
//onFileSelected(event){
//	this.slectedFile = <File>event.target.files[0];
//}//upload file
	
//	onUpload(){
//		const fd= new FormData();
//		fd.append('image', this.slectedFile, this.slectedFile.name)
//		this.http.post('',fd, {
//			reportProgress:true,
//			observe:'events'
//		})
//			.subscribe(event =>{
//			if(event.type === HttpEventType.UploadProgress){
//			console.log('Upload progress: ' + Math.round(event.loaded/event.total *100) + '%')
//		    }
//		      else if(event.type ===HttpEventType.Response){
//			          console.log(event);
//					}
//		})
//	}//onUpload()
	
ngOnInit() {
    var canvas=document.querySelector('canvas');
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	var c=canvas.getContext('2d');
	function circle(x,y,dx,dy,radius,color){
		this.x=x;
		this.y=y;
		this.dx=dx;
		this.dy=dy;
		this.radius=radius;
		this.colors=['#FFCD00','#3F708D','#439FDE'];
		this.color=colors[Math.floor(Math.random() * colors.length)];
		this.draw=function(){
		  c.beginPath();
		  c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);


		  c.fillStyle=color;
		  c.fill();



		}
		this.update=function(){
		  if (this.x+this.radius>innerWidth||this.x-this.radius<0){
			this.dx=-this.dx;
		  }
		  if(this.y+this.radius>innerHeight||this.y-this.radius<0){
			this.dy=-this.dy;
		  }
		this.x+=this.dx;
		this.y+=this.dy;
		this.draw();
		}
	  }
	  // var x= Math.random()*innerWidth;
	  // var y= Math.random()*innerHeight;
	  // var dx=(Math.random()-0.5)*8;
	  // var dy=(Math.random()-0.5)*8;
	  // var radius=30;
	  var circleArray=[];
	  for(var i=0;i<100;i++){
		var x= Math.random()*(innerWidth-(radius*2))+radius;
		var y= Math.random()*(innerHeight-(radius*2))+radius;
		var dx=(Math.random()-0.2)*4;
		var dy=(Math.random()-0.2)*4;
		var radius=30;
		var colors=['#FFCD00','#3F708D','#439FDE'];
		var color=colors[Math.floor(Math.random() * colors.length)];
		circleArray.push(new circle(x,y,dx,dy,radius,color));

	  }

	  function animate(){
		requestAnimationFrame( animate);

		c.clearRect(0,0,innerWidth,innerHeight);
	  for(var i=0;i<circleArray.length;i++){
		circleArray[i].update();
	  }
	  }
	  animate();

  }
	
}//end of Export class
