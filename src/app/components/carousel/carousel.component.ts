import { NgStyle } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { CarouselItem } from '../model/carousel-item';
declare const Impetus: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() slideItems: CarouselItem[] = [];
  index: number = 0;
  ACTIVE_CELL_CLASS: string = 'cell-active';
  animationTranslate: string = '';
  style?: any;
  impetus: any;
  constructor() { }

  ngOnInit(): void {
    this.index = 2;

    this.initializeImpetus();
  }
  initializeImpetus() {
    const instance = this;
    this.impetus = new Impetus({
      source: document.querySelector('.main'),
      update: function (x: any, y: any) {
        var cells = document.querySelectorAll('.cell');

        cells.forEach(e => {
          var index = e.attributes.getNamedItem('id')?.value;
          var item = instance.slideItems[Number(index)];
          var v1 = (e.clientLeft + x);
          item.ngStyleObject = {
            transform: 'translate3d(' + v1 + 'px,0px,0px)',
            cursor: 'grab'
          };

          // reset 
        });

        }
    });
  }

  rightEffect() {
    let index = this.slideItems.length - 1;
    this.slideItems.unshift(this.slideItems.splice(index, 1)[0])
  }

  leftEffect() {
    let index = this.slideItems.length - 1;
    this.slideItems.unshift(this.slideItems.splice(index, 1)[0])
  }

  onNextSlide() {
    this.onMoveSlide(-200, 5);
  }

  onPreviousSlide() {
    this.onMoveSlide(200, -200);
  }

  onMoveSlide(x: number, y: number) {
    if (x > 0)
      this.leftEffect();
    if (y > 0)
      this.rightEffect();

    // clear the class
    this.onClearCurrentSelection();
    this.slideItems[2].cssClass = this.ACTIVE_CELL_CLASS
    this.slideItems[2].ngStyleObject = {
      transform: 'scale(1.1) !important;'
    }
  }

  onClearCurrentSelection() {
    //find current
    var current = this.slideItems.find(x => {
      return x.cssClass === this.ACTIVE_CELL_CLASS
    });

    // clear current
    if (current)
      current.cssClass = '';

    // reset index in case out of range
    if (this.index > this.slideItems.length - 1) this.index = 0
    else if (this.index < 0) this.index = this.slideItems.length - 1;
  }

  onSetStyle() {
    /*this.style = {
      transform: 'translateX(' + this.translateX + '%)',
      cursor: 'grab'
    }*/

    /*window.setTimeout(() => {
      this.style = {
        transform: 'scale(1.1)',
        cursor: 'grab'
      }
    }, 1000);*/
  }
}
