import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BiografiaPage} from '../biografia/biografia';
import {LivroPage} from '../livro/livro';
import {ExercicioPage} from '../exercicio/exercicio';
import {SobrePage} from '../sobre/sobre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  biografia(){
  this.navCtrl.push(BiografiaPage);
}
obras(){
  this.navCtrl.push(LivroPage);
}
exercicios(){
  this.navCtrl.push(ExercicioPage);
}
sobre(){
  this.navCtrl.push(SobrePage);
}

}
