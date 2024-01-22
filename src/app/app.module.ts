// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { CheckboxQuestionComponent } from './checkbox-question/checkbox-question.component';
import { SelectListQuestionComponent } from './select-list-question/select-list-question.component';
import { InputTextQuestionComponent } from './input-text-question/input-text-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    CheckboxQuestionComponent,
    SelectListQuestionComponent,
    InputTextQuestionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
