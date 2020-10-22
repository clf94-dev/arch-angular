import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapImgComponent } from './map-img.component';

describe('MapImgComponent', () => {
  let component: MapImgComponent;
  let fixture: ComponentFixture<MapImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
