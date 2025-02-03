import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputsComponent } from "./user-inputs/user-inputs.component";
import { investmentInput } from './user-inputs/user-inputs.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputsComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
