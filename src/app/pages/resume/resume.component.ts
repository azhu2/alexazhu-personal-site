import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  pdfSrc: string;

  constructor() {
    this.pdfSrc = '../assets/resume/Resume.pdf';
  }

  ngOnInit() {
  }

}
