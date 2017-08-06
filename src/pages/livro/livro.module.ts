import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivroPage } from './livro';

@NgModule({
  declarations: [
    LivroPage,
  ],
  imports: [
    IonicPageModule.forChild(LivroPage),
  ],
  exports: [
    LivroPage
  ]
})
export class LivroPageModule {}
