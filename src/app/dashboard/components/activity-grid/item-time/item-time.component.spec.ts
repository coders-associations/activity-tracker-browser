import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTimeComponent } from './item-time.component';

describe('ItemTimeComponent', () => {
  let component: ItemTimeComponent;
  let fixture: ComponentFixture<ItemTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
