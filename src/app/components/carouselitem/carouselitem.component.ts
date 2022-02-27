import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CarouselItem } from '../model/carousel-item';

@Component({
  selector: 'app-carouselitem',
  templateUrl: './carouselitem.component.html',
  styleUrls: ['./carouselitem.component.css']
})
export class CarouselitemComponent implements OnInit {
  @Input() carouselItem?: CarouselItem = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
