import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: any;
  tableData: any;
user: any;
  constructor(private TestService: TestService) { }
  
  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    this.TestService.getTableData().subscribe(data => {
      this.tableData = data;
    })
  }
  delete(Id: any) {
    this.TestService.delete(Id).subscribe((result) => {
      
    })
  }
}