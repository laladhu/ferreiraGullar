import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the BiografiaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-biografia',
  templateUrl: 'biografia.html',
})
export class BiografiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiografiaPage');
  }

  voltar(){
    this.navCtrl.pop();
  }

  modal() {
    let alert = this.alertCtrl.create({
      title: 'Concretismo',
      subTitle: 'O concretismo foi um movimento vanguardista que ocorreu nas artes plásticas, na música e na poesia. Os poetas concretos pregavam: o fim da poesia intimista e o desaparecimento do eu-lírico (acreditavam que a poesia é fruto de um trabalho mental e de esforço que implica em refazer o texto várias vezes até que ele atinja a sua forma mais adequada; e não, fruto de sentimentos e emoções), a linguagem geométrica e visual, pregavam o fim do verso e da sintaxe tradicional.',
      buttons: ['OK']
    });
    alert.present();
  }

  modal2() {
    let alert = this.alertCtrl.create({
      title: 'Concretismo',
      subTitle:'O neoconcretismo foi um movimento artístico-literário, surgido como uma forma de reagir aos excessos trazidos pelo concretismo. Enquanto o concretismo era extremamente racional, o neoconcretismo trouxe a subjetividade de volta para o processo de criação artística. Foi ele o responsável pela primeiras mudanças nas artes visuais no Brasil, através da proposta de uso de novos meios para a produção, bem como da transformação na forma de receber estas obras de arte. Trouxe também um novo modo de escrever, que pode ser conferido através da obra de Ferreira Gullar e de Reynaldo Jardim.',
      buttons: ['OK']
    });
    alert.present();
  }

}
