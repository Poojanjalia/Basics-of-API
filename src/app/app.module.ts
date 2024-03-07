import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FacultyformComponent } from './facultyform/facultyform.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './edit/edit.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoComponent } from './kendo/kendo.component';

@NgModule({
  declarations: [
    AppComponent,
    FacultyformComponent,
    TableComponent,
    EditComponent,
    KendoComponent,
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule, AppRoutingModule, GridModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }