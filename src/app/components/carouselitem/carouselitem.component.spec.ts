import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselitemComponent } from './carouselitem.component';

describe('CarouselitemComponent', () => {
  let component: CarouselitemComponent;
  let fixture: ComponentFixture<CarouselitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
