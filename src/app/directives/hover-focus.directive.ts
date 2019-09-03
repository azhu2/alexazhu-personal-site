import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverFocus]'
})
export class HoverFocusDirective {
    element: HTMLElement;

    constructor(e: ElementRef) {
        this.element = e.nativeElement;
    }

    static get focusClasses() { return ['cdk-focused', 'cdk-program-focused']; }

    @HostListener('mouseenter')
    onMouseEnter() {
        HoverFocusDirective.focusClasses.forEach(focusClass => {this.element.classList.add(focusClass);});
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        HoverFocusDirective.focusClasses.forEach(focusClass => {this.element.classList.remove(focusClass);});
    }
}
