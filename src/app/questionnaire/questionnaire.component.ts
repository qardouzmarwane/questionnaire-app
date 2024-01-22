import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questions: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch data from the API
    this.http.get<any[]>('https://localhost:7221/api/questionnaire/').subscribe(data => {
      this.questions = data;
    });
  }
}
