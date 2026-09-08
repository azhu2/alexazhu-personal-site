import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NotFoundComponent implements OnInit {

    constructor(private location: Location) { }

    ngOnInit() {
    }

    goBack() {
        this.location.back();
    }
}
