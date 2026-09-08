import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-links-toolbar',
    templateUrl: './links-toolbar.component.html',
    styleUrls: ['./links-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LinksToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
