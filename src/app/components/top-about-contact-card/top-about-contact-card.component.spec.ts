import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAboutContactCardComponent } from './top-about-contact-card.component';

describe('TopAboutContactCardComponent', () => {
  let component: TopAboutContactCardComponent;
  let fixture: ComponentFixture<TopAboutContactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAboutContactCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAboutContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
