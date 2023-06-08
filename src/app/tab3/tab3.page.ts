import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nome: string = '';
  preco: number = '';

  constructor(private toastController: ToastController) { }

  cadastrarProduto() {
    // Aqui você pode adicionar a lógica para salvar o produto no banco de dados
    // Por enquanto, apenas exibiremos um toast com os dados do produto
    const produto = {
      nome: this.nome,
      preco: this.preco
    };

    this.presentToast(`Produto cadastrado: ${produto.nome}, Preço: R$${produto.preco}`);
    this.nome = '';
    this.preco = 0;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
