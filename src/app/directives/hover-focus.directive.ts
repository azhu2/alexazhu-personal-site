import { Directive, ElementRef, HostListener } from '@angular/core';
import { FOCUS_CLASSES } from '../../constants';

@Directive({
  selector: '[appHoverFocus]'
})
export class HoverFocusDirective {
    element: HTMLElement;

    constructor(e: ElementRef) {
        this.element = e.nativeElement;
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        FOCUS_CLASSES.forEach(focusClass => this.element.classList.add(focusClass));
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        FOCUS_CLASSES.forEach(focusClass => this.element.classList.remove(focusClass));
    }
}
