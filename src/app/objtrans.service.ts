import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjtransService {

  constructor() { }
sid:number;
  public setCart(id: number):void {
    this.sid =id;
}

public getCart(): number {
return this.sid;
}



}
