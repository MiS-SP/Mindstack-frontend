import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TertiaryDecorator } from './tertiary-decorator';

describe('TertiaryDecorator', () => {
  let component: TertiaryDecorator;
  let fixture: ComponentFixture<TertiaryDecorator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TertiaryDecorator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TertiaryDecorator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
