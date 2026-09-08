import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-flipping',
    templateUrl: './flipping.component.html',
    styleUrls: ['./flipping.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FlippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
