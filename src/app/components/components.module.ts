import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { CarouselitemComponent } from './carouselitem/carouselitem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarouselService } from './service/carousel.service';



@NgModule({
  declarations: [
    CarouselComponent,
    CarouselitemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[CarouselComponent, CarouselitemComponent],
  providers: [CarouselService]
})
export class ComponentsModule { }
