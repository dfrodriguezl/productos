import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';
import { Producto } from '../../models/producto';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  productosFiltrados: Producto[] = [];

  constructor(public navCtrl: NavController,
    private servicioProducto: ProductosProvider) {

  }

  ionViewDidLoad(){
    this.servicioProducto.obtenerProductos().subscribe(
      productos => {
        console.log(productos);
        this.productosFiltrados = productos.filter(p => p.bestSeller);
      }
    );
  }
}
