import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AddSchoolComponent } from './add-school/add-school.component';
import {NzCardModule} from "ng-zorro-antd/card";



@NgModule({
  declarations: [CommentsComponent, AddSchoolComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([{
            path: '',
            component: CommentsComponent
        }]),
        NzCardModule,
    ]
})
export class CommentsModule { }
