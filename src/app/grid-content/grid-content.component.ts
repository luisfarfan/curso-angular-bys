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
  queryString: string;
  productos: IProducto[];

  constructor(private inputSearchService: InputSearchService,
              private productoService: ProductoService) {
  }

  ngOnInit() {
    this.inputSearchService.queryString.subscribe((queryString) => {
      this.queryString = queryString;
      this.getProductos();
    });
  }

  getProductos() {
    this.productoService.getProductos(this.queryString).subscribe((productos) => {
      this.productos = productos;
    })
  }

}
