import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryDecorator } from './primary-decorator';

describe('PrimaryDecorator', () => {
  let component: PrimaryDecorator;
  let fixture: ComponentFixture<PrimaryDecorator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryDecorator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryDecorator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
