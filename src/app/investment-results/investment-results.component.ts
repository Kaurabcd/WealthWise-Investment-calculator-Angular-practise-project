import { Component, Input } from '@angular/core';
import { AnnualDataService } from '../shared/annual-data.service';
import { user } from '../user-inputs/user-inputs.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
// @Input() data:any;
constructor(private annualServie:AnnualDataService){}
data:any;
ngOnInit(){
  this.data=this.annualServie.getData();
}
}
