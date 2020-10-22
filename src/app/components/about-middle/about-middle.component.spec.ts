import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMiddleComponent } from './about-middle.component';

describe('AboutMiddleComponent', () => {
  let component: AboutMiddleComponent;
  let fixture: ComponentFixture<AboutMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
