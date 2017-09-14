import {Component, OnInit} from '@angular/core';
import {ProductoService} from "../shared/producto.service";
import {InputSearchService} from "../shared/input-service.service";
import {IProducto} from "../shared/interfaces/producto.interface";

@Component({
  selector: 'grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.css']
})
export class GridContentComponent implements OnInit {
  luchito: string;
  productos: IProducto[];
  productoSeleccionado: IProducto;

  constructor(private inputSearchService: InputSearchService,
              private productoService: ProductoService) {
  }

  ngOnInit() {
    this.inputSearchService.queryString.subscribe((roger) => {
      if (roger.length > 3) {
        this.luchito = roger;
        this.getProductos();
      } else {
        this.productos = [];
      }
    })
  }

  getProductos() {
    this.productoService.getProductos(this.luchito).subscribe((productos) => {
      this.productos = productos
    });
  }

  seleccionarProducto(producto: IProducto) {
    this.productoSeleccionado = producto;
  }

}
