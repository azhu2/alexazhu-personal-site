import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';

describe('ResumeComponent', () => {
    let component: ResumeComponent;
    let fixture: ComponentFixture<ResumeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                PdfViewerModule
            ],
            declarations: [
                ResumeComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResumeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
