import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ExercicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-exercicio',
  templateUrl: 'exercicio.html',
})
export class ExercicioPage {
  resposta1: String;
resposta2: String;
resposta3: String;
resposta4: String;
resposta5: String;
resposta6: String;
resposta7: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercicioPage');
  }
  voltar(){
  this.navCtrl.pop();
}

ex1(){
  if(this.resposta1 =='a1'){
    let alert = this.alertCtrl.create({
      title: 'Resposta correta!',
      buttons: ['OK']
    });
    alert.present();
  }
  else{
    let alert = this.alertCtrl.create({
      title: 'Resposta incorreta, tente novamente.',
      buttons: ['OK']
    });
    alert.present();
  }
}
ex2(){
  if(this.resposta2 =='a2'){
    let alert = this.alertCtrl.create({
      title: 'Resposta correta!',
      buttons: ['OK']
    });
    alert.present();
  }
  else{
    let alert = this.alertCtrl.create({
      title: 'Resposta incorreta, tente novamente.',
      buttons: ['OK']
    });
    alert.present();
  }
}
ex3(){
  if(this.resposta3 =='e3'){
    let alert = this.alertCtrl.create({
      title: 'Resposta correta!',
      buttons: ['OK']
    });
    alert.present();
  }
  else{
    let alert = this.alertCtrl.create({
      title: 'Resposta incorreta, tente novamente.',
      buttons: ['OK']
    });
    alert.present();
  }
}
ex4(){
  if(this.resposta4 =='c4'){
    let alert = this.alertCtrl.create({
      title: 'Resposta correta!',
      buttons: ['OK']
    });
    alert.present();
  }
  else{
    let alert = this.alertCtrl.create({
      title: 'Resposta incorreta, tente novamente.',
      buttons: ['OK']
    });
    alert.present();
  }  }
  ex5(){
    if(this.resposta5 =='b5'){
      let alert = this.alertCtrl.create({
        title: 'Resposta correta!',
        buttons: ['OK']
      });
      alert.present();
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Resposta incorreta, tente novamente.',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  ex6(){
    if(this.resposta6 =='d6'){
      let alert = this.alertCtrl.create({
        title: 'Resposta correta!',
        buttons: ['OK']
      });
      alert.present();
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Resposta incorreta, tente novamente.',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  ex7(){
    if(this.resposta7 =='a7'){
      let alert = this.alertCtrl.create({
        title: 'Resposta correta!',
        buttons: ['OK']
      });
      alert.present();
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Resposta incorreta, tente novamente.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
