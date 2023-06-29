import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ApiService} from 'src/app/services/api.service';
import { NavigateService } from 'src/app/services/navigate.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.less']
})
export class AddSchoolComponent implements OnInit {
  userForm: FormGroup ;
  editData: any;
  isEdit: boolean; // 接收传递的标识
  currentUser: any;
  constructor(
    private fb: FormBuilder,
    private nzModalService: NzModalService,
    private apiService: ApiService,
    public storageService: StorageService,
    private modalRef: NzModalRef,
    private $message: NzMessageService,
    private navigateService: NavigateService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getItem('username');
    if(this.isEdit){
      this.currentUser = this.editData.title;
      this.userForm = this.fb.group({
      title: [this.editData.title, [Validators.required]], // 初始化编辑数据到表单
      number: [this.editData.number, [Validators.required]],
      desc: [this.editData.desc],
      teacher: [this.editData.teacher, [Validators.required]],
      sex: [this.editData.sex, [Validators.required]],
      contact: [this.editData.contact, [Validators.required]],
      end_time: [this.editData.end_time],
    });
    }else {
      this.userForm = this.fb.group({
      title: [this.currentUser, [Validators.required]], // 初始化编辑数据到表单
      number: [null, [Validators.required]],
      desc: [null],
      teacher: [null, [Validators.required]],
        sex: [null, [Validators.required]],
      contact: [null],
      end_time: [null],
      }); // 初始化表单
    }
  }
  submitUser(){
    this.userForm.markAllAsTouched();
    //if (!this.userForm.valid) {return;}
    let params = this.userForm.value;
    let url = 'addSchool';
    if (this.isEdit) {
      url = 'updateSchool';
      params.id = this.editData.id;
    }
    this.apiService.post( url, params ).subscribe((res: any) => {
      console.log(res);
      const { code, msg } = res;
      if (code === 0) {
        this.$message.success('添加成功！');
        this.modalRef.destroy('success');
      } else {
       this.$message.error(msg);
      }
    });
  }

}
