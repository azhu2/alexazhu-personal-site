import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTabComponent } from './new-tab.component';

import { LinksToolbarComponent } from './../../components/links-toolbar/links-toolbar.component';


describe('NewTabComponent', () => {
    let component: NewTabComponent;
    let fixture: ComponentFixture<NewTabComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NewTabComponent,
                LinksToolbarComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
