import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {MyListComponent} from "./my-list.component";



@NgModule({
  declarations: [MyListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: MyListComponent
  }]),
  ]
})
export class MyListModule { }
