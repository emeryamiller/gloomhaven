import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyMonsterComponent } from './empty-monster.component';

describe('EmptyMonsterComponent', () => {
  let component: EmptyMonsterComponent;
  let fixture: ComponentFixture<EmptyMonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyMonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
