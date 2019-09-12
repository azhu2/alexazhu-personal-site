import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMenuComponent } from './project-menu.component';

import { MatMenuModule } from '@angular/material/menu';

describe('ProjectMenuComponent', () => {
    let component: ProjectMenuComponent;
    let fixture: ComponentFixture<ProjectMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatMenuModule
            ],
            declarations: [
                ProjectMenuComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
