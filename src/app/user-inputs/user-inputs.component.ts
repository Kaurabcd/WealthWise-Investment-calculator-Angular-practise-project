import { Component, EventEmitter, Output } from '@angular/core';
import { user } from './user-inputs.model';
import { FormsModule } from '@angular/forms';
import { AnnualDataService } from '../shared/annual-data.service';
@Component({
  selector: 'app-user-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-inputs.component.html',
  styleUrl: './user-inputs.component.css'
})
export class UserInputsComponent {
  constructor(public annualService:AnnualDataService){}
//  @Output() data = new EventEmitter<any>();
user:user={ 
  initial_invest:0,
  annual_invest:0,
  return:0,
  duration:0}
  annualData:any;
  onSubmit(){
    // console.log(this.user);
    // this.data.emit(this.user);
    this.calculateInvestmentResults();
  }
  calculateInvestmentResults() {
    console.log(this.user);
    let investmentValue = this.user.initial_invest;
  
    for (let i = 0; i < this.user.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.user.return / 100);
      investmentValue += interestEarnedInYear + this.user.annual_invest
      const totalInterest =
        investmentValue - this.user.annual_invest * year - this.user.initial_invest;
      this.annualData={
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.user.annual_invest,
        totalInterest: totalInterest,
        totalAmountInvested: this.user.initial_invest + this.user.annual_invest * year,
      }
      this.annualService.addData(this.annualData);
      console.log(this.annualService.getData());
    }

}
}
