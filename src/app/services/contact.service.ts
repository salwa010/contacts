import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactlist:Array <any>=[]

  constructor() { }

addContact(data:any):void{

  this.contactlist.push(data);
}


deleteContact(index:number):void{

  this.contactlist.splice(index,1);
}

findIndex(data:any):number{
  const index:number= this.contactlist.findIndex(element => element === data);
  return index;
}
 getContacts():Array<any>{
  return this.contactlist
 }

 updateContact(index:number,data:any):void{
  this.contactlist[index]=data;

 }

 findContactByIndex(index:number):void{
  return this.contactlist[index]

 }
  
}
