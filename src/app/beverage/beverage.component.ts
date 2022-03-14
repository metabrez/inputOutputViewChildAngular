import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {
  @Input() beverage: string = 'coffee'
  @Output() addNewBeverageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addBeverage(value: string) {
    this.addNewBeverageEvent.emit(value);
  }
  showBeverages() {
    const beverage = ['lemon', 'tea', 'milk']
    return beverage;
  }

}
