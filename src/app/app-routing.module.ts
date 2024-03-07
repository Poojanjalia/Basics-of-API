import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyformComponent } from './facultyform/facultyform.component';
import { TableComponent } from './table/table.component';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { KendoComponent } from './kendo/kendo.component';
const routes: Routes = [
  { path: '', redirectTo:'table' , pathMatch:'full'},
  { path: 'forms', component: FacultyformComponent },
  { path: 'table', component: TableComponent },
  { path: 'edit', component: EditComponent },
  { path: 'kendo', component: KendoComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
