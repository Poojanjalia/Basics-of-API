import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../test.service';
@Component({
  selector: 'app-facultyform',
  templateUrl: './facultyform.component.html',
  styleUrls: ['./facultyform.component.css']
})
export class FacultyformComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private  formBuilder: FormBuilder, private TestService:TestService) { }

  users: any;
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      Id:['', Validators.required],
      First_name: ['', Validators.required],
      Last_name: ['',Validators.required] ,
      email: ['',Validators.required, Validators.email],
      subject: ['',Validators.required],
      experience: ['',Validators.required],
      phone: ['',Validators.required,Validators.maxLength],
      institute: ['',Validators.required]
    });
  }
  onSubmit(data: any) {
    console.log(data)
    this.TestService.addUser(data).subscribe((result) => {
      console.warn(data)
    })
  }
}