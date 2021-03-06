import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/internal/operators/retry';

 let httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
 }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }
  
// post with header and data
  postDataHeader(path: string,data,header ?): Observable<any> {
    return this.http.post(path,data,header);

  }
  getMyData(path: string,header): Observable<any> {
    return this.http.get(path,header);
  }//get upcoming courses

  //delete 
  deleteData(path:string,data){
    return this.http.delete(path,data);
  }


  delete(path: string): Observable<any> {
    return this.http.delete(path);
  }

  getdataonly(path: string): Observable<any> {
    return this.http.get(path);
 }//json file course

	PostData(WorkSpace:object) {
    return this.http.post('http://172.16.5.177:3000/workspace/add', WorkSpace);
  }//done signUp
	
	getData(path: string,httpOption): Observable<any> {
     return this.http.put(path,httpOption);
  }//signin
  
 
	
	postAdmin(path:string, data) : Observable<any>{
    return this.http.put(path,data);
  }
	
	courseJson(path: string): Observable<any> {
     return this.http.get(path);
	}//json file course
	
	instructorJson(path: string): Observable<any> {
     return this.http.get(path);
	}//json file course
	
	formCrs(offeredCourse:object) {
    console.log(offeredCourse)
    return this.http.post('http://172.16.5.177:3000/workspace/createofferedcoursebyworkspace', offeredCourse);
  }

  instAdmin(path: string): Observable<any> {
    return this.http.get(path);
 }

 reqCrsWrkspace(path: string): Observable<any> {
  return this.http.get(path);
}

 wrkspaceAdmin(path: string): Observable<any> {
  return this.http.get(path);
}

crsAdmin(path: string): Observable<any> {
  return this.http.get(path);
}

AdPostCrs(path: string): Observable<any> {
  return this.http.put(path,httpOption);
}

AdPostInst(path: string): Observable<any> {
  return this.http.put(path,httpOption);
}

AdPostwrkspace(path: string): Observable<any> {
  return this.http.put(path,httpOption);
}

adsecApp(path: string): Observable<any> {
  return this.http.put(path,httpOption);
}

crsapprovepost(path: string): Observable<any> {
  return this.http.post(path,httpOption);
}

postwrkspaceReq(path: string): Observable<any> {
  return this.http.post(path,httpOption);
}

postworkSpc(path: string): Observable<any> {
  return this.http.put(path,httpOption);
}

shwQrs(path: string): Observable<any> {
  return this.http.get(path);
}



}
