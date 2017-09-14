import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class InputSearchService {
  @Output() queryString: EventEmitter<string> = new EventEmitter();
  private $queryString;

  constructor() {
  }

}
