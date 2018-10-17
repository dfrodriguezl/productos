import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';
import { Producto } from '../../models/producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productos:Producto[] = [];

  constructor(public navCtrl: NavController,
    private servicioProductos: ProductosProvider) {

  }

  ionViewDidLoad(){
    this.servicioProductos.obtenerProductos().subscribe(
      (datos: Producto[]) => {
        this.productos = datos;
      }
    );
  }

  detalleProducto(producto:Producto){
    this.navCtrl.push('DetalleProductoPage',{
      datos: producto,
      otro: 1
    });
  }

}
