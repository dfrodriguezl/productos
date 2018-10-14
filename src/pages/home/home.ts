import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productos = [];

  constructor(public navCtrl: NavController,
    private servicioProductos: ProductosProvider) {

  }

  ionViewDidLoad(){
    this.servicioProductos.obtenerProductos().subscribe(
      (datos: any[]) => {
        this.productos = datos;
      }
    );
  }

  detalleProducto(producto){
    this.navCtrl.push('DetalleProductoPage',{
      datos: producto,
      otro: 1
    });
  }

}
