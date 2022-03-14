import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BeverageComponent } from './beverage/beverage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // View child using component
  @ViewChild(BeverageComponent)
  private beverageComponent: BeverageComponent;
  // view Child using Template Reference
  @ViewChild('beverageMessage')
  private elBeverageMessage: ElementRef

  title = 'componet-interation';
  beverage: string = 'Tea'
  listOfBeverages = ['Milk', 'Lemon Tea', 'Hot Tea', 'Cold Tea', 'Hot Coffe']
  beverageListFromChild: string[] = [];
  clickedButton: boolean = false;

  ngAfterViewInit() {
    this.elBeverageMessage.nativeElement.style.backgroundColor = 'red';
  }

  addBeverage(beverage: string) {
    this.listOfBeverages.push(beverage);
    this.clearInput();
  }

  clearInput() {
    let input = <HTMLInputElement>document.getElementById('beverage-input');
    input.value = '';
  }
  beverageFromChildComponent() {

    // this.beverageComponent.showBeverages();
    this.clickedButton = true;
    this.beverageListFromChild = this.beverageComponent.showBeverages();
    console.log(this.beverageListFromChild)
  }
}
