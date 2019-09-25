import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";

import { HoverFocusDirective } from './hover-focus.directive';

@Component({
    template: '<div appHoverFocus></div>'
})
class TestComponent {}

describe('HoverFocusDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HoverFocusDirective,
                TestComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.query(By.directive(HoverFocusDirective));
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(element).toBeTruthy();
    });

    it('should apply focus classes on mouseenter', () => {
        element.triggerEventHandler('mouseenter', null);
        fixture.detectChanges();
        expect(element.nativeElement.classList).toContain('cdk-focused');
        expect(element.nativeElement.classList).toContain('cdk-program-focused');
    });

    it('should remove focus classes on mouseleave', () => {
        element.triggerEventHandler('mouseenter', null);
        element.triggerEventHandler('mouseleave', null);
        fixture.detectChanges();
        expect(element.nativeElement.classList).not.toContain('cdk-focused');
        expect(element.nativeElement.classList).not.toContain('cdk-program-focused');
    });
});
