import { Component, computed, Input } from '@angular/core';
import { AnnualDataService } from '../shared/annual-data.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
// @Input() data:any;
constructor(private investmentResult:AnnualDataService){}
data= computed(()=>this.investmentResult.InvestmentResultFinal())

ngOnInit(){
  // this.data=this.investmentResult.InvestmentResultFinal();
}
}
