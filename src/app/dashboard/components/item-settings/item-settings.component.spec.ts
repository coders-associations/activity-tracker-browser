import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSettingsComponent } from './item-settings.component';

describe('ItemSettingsComponent', () => {
  let component: ItemSettingsComponent;
  let fixture: ComponentFixture<ItemSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
