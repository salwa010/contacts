import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './contact-list/list/list.component';
import { ContactlistnewComponent } from './contactlistnew/contactlistnew.component';

const routes: Routes = [
  {path:"",component:ListComponent},
  {path:"contactlistnew",component:ContactlistnewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
