import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {InputSearchService} from "../shared/input-service.service";

@Component({
  selector: 'input-search-product',
  templateUrl: './input-search-product.component.html',
  styleUrls: ['./input-search-product.component.css']
})
export class InputSearchProductComponent implements OnInit {
  @ViewChild('inputSearchProducto') inputSearchProducto: ElementRef;
  queryString: string;

  constructor(private inputSearchService: InputSearchService) {
  }

  ngOnInit() {
  }

  setQueryString(event) {
    this.queryString = event.target.value;
    this.inputSearchService.queryString.emit(this.queryString);
  }

}
