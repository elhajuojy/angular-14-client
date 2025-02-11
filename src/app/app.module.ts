import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './components/add-student/add-student.component';
import { StudentsDetailsComponent } from './components/student-details/student-details.component';
import { StudentsListComponent } from './components/student-list/student-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    StudentsDetailsComponent,
    StudentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
