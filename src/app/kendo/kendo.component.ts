import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CreateFormGroupArgs } from '@progress/kendo-angular-grid/editing-directives/create-form-group-args.interface';

@Component({
  selector: 'app-kendo',
  templateUrl: './kendo.component.html',
  styleUrls: ['./kendo.component.css'],
  })
  
export class KendoComponent {
  tableData: any[] = [];

  public formGroup: FormGroup;
    constructor(private testService: TestService, private formBuilder: FormBuilder) { 
      this.createFormGroup = this.createFormGroup.bind(this);
      this.formGroup = this.formBuilder.group({
        Id: "",
        First_name: "",
        Last_name: "",
        Email: "",
        subject: "",
        experience: "",
        institute: ""
      });   
    }
  
  public createFormGroup(args: CreateFormGroupArgs): FormGroup{
    if (!args.dataItem) {
      return this.formBuilder.group({
        Id: new FormControl(null),  
        First_name: new FormControl,
        Last_name: new FormControl, 
        Email: new FormControl, 
        subject: new FormControl,
        experience: new FormControl,
        institute: new FormControl 
      });
    }
      return this.formBuilder.group({
       Id: new FormControl(args.dataItem.Id),
       First_name: new FormControl(args.dataItem.First_name, Validators.required),
       Last_name: new FormControl(args.dataItem.Last_name, Validators.required),
       Email: new FormControl(args.dataItem.Email, Validators.required),
       subject: new FormControl(args.dataItem.subject, Validators.required),
       experience: new FormControl(args.dataItem.experience, Validators.required),
       institute: new FormControl(args.dataItem.institute, Validators.required)
     });
  }
   
  
  ngOnInit(): void {
    this.getData();
  }
  
  getData() {
    this.testService.getTableData().subscribe(
      (data: any[]) => {
        this.tableData = data;
      }
    );
  }
  editUser(tableData: any) {
    this.testService.editUser(tableData).subscribe((tableData) => {
      console.log(tableData)
    })
  }
  onSubmit(tableData: any) {
    console.log(tableData)
    this.testService.addUser(tableData).subscribe((tableData) => {
      console.warn(tableData)
    })
  }
  deleteUser(id: number) {
    this.testService.delete(id).subscribe(
      (response) => {
      }
    );
  }
}