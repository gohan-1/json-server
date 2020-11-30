import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDoxComponent } from './dialog-dox.component';

describe('DialogDoxComponent', () => {
  let component: DialogDoxComponent;
  let fixture: ComponentFixture<DialogDoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
