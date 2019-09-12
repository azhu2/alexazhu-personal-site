import { HoverFocusDirective } from './hover-focus.directive';
import { ElementRef } from '@angular/core';

describe('HoverFocusDirective', () => {
    let element: ElementRef;
    let htmlElement: HTMLElement;

    beforeEach(() => {
        element = {
            nativeElement: htmlElement
        };
    });

    it('should create an instance', () => {
        const directive = new HoverFocusDirective(element);
        expect(directive).toBeTruthy();
    });
});
