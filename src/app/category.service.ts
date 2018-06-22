import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  GetCategories(){
    return this.http.get("http://172.16.5.184:3000/categories");
  }

  GetCategoriesById(id:number){
    return this.http.get("http://172.16.5.184:3000/categories");
  }

}
