import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExercicioPage } from './exercicio';

@NgModule({
  declarations: [
    ExercicioPage,
  ],
  imports: [
    IonicPageModule.forChild(ExercicioPage),
  ],
  exports: [
    ExercicioPage
  ]
})
export class ExercicioPageModule {}
