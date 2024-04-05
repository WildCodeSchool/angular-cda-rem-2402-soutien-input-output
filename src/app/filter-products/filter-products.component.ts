import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})
export class FilterProductsComponent {
  @Input() title!: string;
  @Output() filterEmit: EventEmitter<string> = new EventEmitter();

  sendFilterToParent() {
    this.filterEmit.emit(this.title);
  }
}
