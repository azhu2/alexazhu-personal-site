import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-new-tab',
    templateUrl: './new-tab.component.html',
    styleUrls: ['./new-tab.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NewTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
