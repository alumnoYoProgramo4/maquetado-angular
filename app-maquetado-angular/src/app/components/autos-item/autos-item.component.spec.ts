import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosItemComponent } from './autos-item.component';

describe('AutosItemComponent', () => {
  let component: AutosItemComponent;
  let fixture: ComponentFixture<AutosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
