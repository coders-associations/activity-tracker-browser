import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFreqComponent } from './item-freq.component';

describe('ItemFreqComponent', () => {
  let component: ItemFreqComponent;
  let fixture: ComponentFixture<ItemFreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
