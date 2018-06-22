import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParamService {
  private urlHistory: string;

  constructor() {
    this.urlHistory = "";
   }

   
    public getUrlHistoryObj(): string {
        return this.urlHistory;
    }
}
