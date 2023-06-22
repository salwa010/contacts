import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlistnewComponent } from './contactlistnew.component';

describe('ContactlistnewComponent', () => {
  let component: ContactlistnewComponent;
  let fixture: ComponentFixture<ContactlistnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactlistnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactlistnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
