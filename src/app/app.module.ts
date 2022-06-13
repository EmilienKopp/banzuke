import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ResultsComponent } from './results/results.component';
import { ClassComponent } from './class/class.component';
import { WorksheetComponent } from './worksheet/worksheet.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ResultsComponent,
    ClassComponent,
    WorksheetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
