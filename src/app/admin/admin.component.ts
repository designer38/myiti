import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
getAdmin:Array<object>;
formData: object;
  constructor(private Data: DataService,
        private http:HttpClient,
        private router: Router
      ) {
	  this.getAdmin=[{}];
  
  }
	
	  getContact(data: NgForm): void{
      console.log(data.value)
    let path:string='http://172.16.5.177:3000/admin/login'
    this.Data.postAdmin(path,data.value).subscribe(
      res=>{
        this.getAdmin =res;
        console.log(res);
        localStorage.setItem('adminId', res.userId);
        this.router.navigate(['/AdminInstructor'])
      },
      err=>{
        console.log(err);
      },
      );
  }

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
		this.colors=['#FFCD00','#3F708D','#439FDE','#F88756'];
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
		var dx=(Math.random()-0.2)*10;
		var dy=(Math.random()-0.2)*10;
		var radius=30;
		var colors=['#FFCD00','#3F708D','#439FDE','#F88756'];
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

}
