import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
          {
              path: '',
              component: CarouselComponent
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
