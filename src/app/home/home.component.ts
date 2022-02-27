import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../components/model/carousel-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carouselItems: CarouselItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.onInitCarouselItems();
  }
  
  onInitCarouselItems() {
    this.carouselItems = [
      {
        title: 'Mobile internet',
        imageUrl: 'https://onlinecms.mtn.co.za/sites/default/files/B2S%20Global%20Nav%20desktop_0.png',
        clickUrl: '',
        cssClass: ''
      },
      {
        title: 'Home internet',
        imageUrl: 'https://onlinecms.mtn.co.za/sites/default/files/B2S%20Global%20Nav%20desktop_0.png',
        clickUrl: '',
        cssClass: ''
      },
      {
        title: 'Get a device',
        imageUrl: 'https://onlinecms.mtn.co.za/sites/default/files/B2S%20Global%20Nav%20desktop_0.png',
        clickUrl: '',
        subActionLink: {
          title: 'START HERE',
          iconName: 'arrorw',
          url: ''
        },
        cssClass: 'cell-active'
      },
      {
        title: 'Add a phone-line',
        imageUrl: 'https://onlinecms.mtn.co.za/sites/default/files/B2S%20Global%20Nav%20desktop_0.png',
        clickUrl: '',
        cssClass: ''
      },
      {
        title: 'Upgrade',
        imageUrl: 'https://onlinecms.mtn.co.za/sites/default/files/B2S%20Global%20Nav%20desktop_0.png',
        clickUrl: '',
        cssClass: ''
      }
    ]
  }
}
