import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

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

    static get menuTransitionTimeoutMs() { return 100; }

    constructor() { }

    ngOnInit() {
    }

    projectButtonEnter() {
        this.projectButtonEntered = true;

        setTimeout(() => {
            if(!this.projectMenuTrigger.menuOpen) {
                this.projectMenuTrigger.openMenu();
                this.focusButton();
            }
        }, ProjectMenuComponent.menuTransitionTimeoutMs);
    }

    projectButtonLeave() {
        this.projectButtonEntered = false;

        setTimeout(() => {
            if(this.projectMenuTrigger.menuOpen && !this.projectMenuEntered) {
                this.projectMenuTrigger.closeMenu();
                this.unfocusButton();
            }
        }, ProjectMenuComponent.menuTransitionTimeoutMs);
    }

    projectMenuEnter() {
        this.projectMenuEntered = true;

        setTimeout(() => {
            // no-op
        }, ProjectMenuComponent.menuTransitionTimeoutMs);
    }

    projectMenuLeave() {
        this.projectMenuEntered = false;

        setTimeout(() => {
            if(this.projectMenuTrigger.menuOpen && !this.projectButtonEntered) {
                this.projectMenuTrigger.closeMenu();
                this.unfocusButton();
            }
        }, ProjectMenuComponent.menuTransitionTimeoutMs);
    }

    focusButton() {
        this.projectButton.nativeElement.classList.add('cdk-focused');
        this.projectButton.nativeElement.classList.add('cdk-program-focused');
    }

    unfocusButton() {
        this.projectButton.nativeElement.classList.remove('cdk-focused');
        this.projectButton.nativeElement.classList.remove('cdk-program-focused');
    }
}
