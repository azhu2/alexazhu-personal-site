import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-call-blocker',
    templateUrl: './call-blocker.component.html',
    styleUrls: ['./call-blocker.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CallBlockerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
