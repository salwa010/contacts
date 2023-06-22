import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  contactList:Array<any>=[];
 

  constructor(private service:ContactService, private router: Router  ) { }

  ngOnInit(): void {
    this.getAllContact();
  
  }

  editContact(index:number):void{
this.router.navigate(['/contactlistnew'],{queryParams:{index:index}})
  }

add(){
  this.router.navigateByUrl('contactlistnew')
}





getAllContact():void{
 this.contactList =this.service.getContacts();
 console.log(this.contactList)
}

deleteContact(index:number):void{
  this.service.deleteContact(index);

}



}
