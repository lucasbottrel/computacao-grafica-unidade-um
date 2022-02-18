import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() enableGridEvent = new EventEmitter<boolean>();
  @Output() buttonSelectedEvent = new EventEmitter<string>();

  enableGrid = false;
  buttonSelected: string = '';

  constructor() {}

  ngOnInit(): void {}

  selectRetasDDA() {
    this.enableGrid = true;
    this.enableGridEvent.emit(this.enableGrid);
    this.buttonSelected = 'retasDDA';
    this.buttonSelectedEvent.emit(this.buttonSelected);
  }

  selectRetasBresenham() {
    this.enableGrid = true;
    this.enableGridEvent.emit(this.enableGrid);
    this.buttonSelected = 'retasBresenham';
    this.buttonSelectedEvent.emit(this.buttonSelected);
  }

  selectCirculoBresenham() {
    this.enableGrid = true;
    this.enableGridEvent.emit(this.enableGrid);
    this.buttonSelected = 'circuloBresenham';
    this.buttonSelectedEvent.emit(this.buttonSelected);
  }
}
