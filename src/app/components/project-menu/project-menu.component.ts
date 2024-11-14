import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { MatLegacyMenuTrigger as MatMenuTrigger } from '@angular/material/legacy-menu';
import { MENU_TRANSITION_TIMEOUT_MS, FOCUS_CLASSES } from '../../../constants';

@Component({
  selector: 'app-project-menu',
  templateUrl: './project-menu.component.html',
  styleUrls: ['./project-menu.component.scss']
})

/*
 * This logic is to handle opening the "Projects" tab on hover (Angular Material refuses to support this usecase).
 * Heavily inspired by https://stackoverflow.com/questions/53618333
 */
export class ProjectMenuComponent implements OnInit {
    projectButtonEntered = false;
    projectMenuEntered = false;

    @ViewChild('projectMenuTrigger', {static: false}) projectMenuTrigger: MatMenuTrigger;
    @ViewChild('projectButton', {read: ElementRef, static: false}) projectButton: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    projectButtonEnter() {
        this.projectButtonEntered = true;

        setTimeout(() => {
            if (!this.projectMenuTrigger.menuOpen) {
                this.projectMenuTrigger.openMenu();
                FOCUS_CLASSES.forEach(focusClass => this.projectButton.nativeElement.classList.add(focusClass));
            }
        }, MENU_TRANSITION_TIMEOUT_MS);
    }

    projectButtonLeave() {
        this.projectButtonEntered = false;

        setTimeout(() => {
            if (this.projectMenuTrigger.menuOpen && !this.projectMenuEntered) {
                this.projectMenuTrigger.closeMenu();
                FOCUS_CLASSES.forEach(focusClass => this.projectButton.nativeElement.classList.remove(focusClass));
            }
        }, MENU_TRANSITION_TIMEOUT_MS);
    }

    projectMenuEnter() {
        this.projectMenuEntered = true;

        setTimeout(() => {
            // no-op
        }, MENU_TRANSITION_TIMEOUT_MS);
    }

    projectMenuLeave() {
        this.projectMenuEntered = false;

        setTimeout(() => {
            if (this.projectMenuTrigger.menuOpen) {
                this.projectMenuTrigger.closeMenu();
            }
            if (!this.projectButtonEntered) {
                FOCUS_CLASSES.forEach(focusClass => this.projectButton.nativeElement.classList.remove(focusClass));
            }
        }, MENU_TRANSITION_TIMEOUT_MS);
    }
}
