import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../test.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  myForm: any;
  constructor(private formBuilder: FormBuilder, private TestService: TestService) { }
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
  done(data: any) {
    this.TestService.editUser(data).subscribe((data) => {
      console.log(data)
    })
  }
}
