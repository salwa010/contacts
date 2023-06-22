import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Router ,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-contactlistnew',
  templateUrl: './contactlistnew.component.html',
  styleUrls: ['./contactlistnew.component.scss']
})
export class ContactlistnewComponent implements OnInit {
  name:any='';
  phone:any='';
  dob:any ='';             //collection of object - class
  age:any='';

   saveFlag:boolean=true;
   contactIndex=-1;
   contactList:Array<any>=[]

   constructor( private service:ContactService  ,private router:Router , private route:ActivatedRoute) { }
 
   ngOnInit(): void {
    this.getAllContactList();
    this.checkParams();
   }

  //  submit():void{

  //   const name=this.name
  //   const phone=this.phone
  //   const dob=this.dob
  //   const age=this.age
  //   const contact={
  //     name,
  //     phone,
  //     dob,
  //     age,
  //   }

  //    this.service.contactlist.push(contact)
  //    console.log( this.service.contactlist)
  //     }

  checkParams():void{
    this.route.queryParams.subscribe((res:Params)=>{
     this.contactIndex = res['index'] ? parseInt(res['index']) :-1;
    //  console.log(this.contactIndex >=0)
     if (this.contactIndex >= 0) {
      this.saveFlag=false;
      const user:any=this.service.findContactByIndex(this.contactIndex);
      this.name=user.name;
      this.phone=user.phone;
      this.dob=user.dob;
      this.age=user.age;
     } else {
      console.log("hhhh");
     }
     });
  }
      getAllContactList():void{
        this.contactList =this.service.getContacts();

      }

      submit():void{

   if(!this.saveFlag){
    this.service.updateContact(this.contactIndex as number,{name:this.name,phone:this.phone,dob:this.dob,age:this.age});
    this.router.navigate(['/']);
    this.saveFlag=true;
   }
       else{
        this.service.addContact({name:this.name,phone:this.phone,dob:this.dob,age:this.age});
        this.router.navigate(['/']);
       }
      }
}
