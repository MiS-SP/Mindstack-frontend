import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMenu } from './base-menu';

describe('BaseMenu', () => {
  let component: BaseMenu;
  let fixture: ComponentFixture<BaseMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
