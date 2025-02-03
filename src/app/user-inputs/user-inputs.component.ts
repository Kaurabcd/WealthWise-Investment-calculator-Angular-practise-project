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
  enteredInitialInvestment:0,
  enteredAnnualInvestment:0,
  enteredExpectedRetrun:0,
  enteredDuration:0}
  annualData:any;
  
  onSubmit(){
    // this.data.emit(this.user);
    this.calculateInvestmentResults();
  }
  
  calculateInvestmentResults() {
    console.log(this.user);
    let investmentValue = this.user.enteredInitialInvestment;
  
    for (let i = 0; i < this.user.enteredDuration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.user.enteredExpectedRetrun / 100);
      investmentValue += interestEarnedInYear + this.user.enteredAnnualInvestment
      const totalInterest =
        investmentValue - this.user.enteredAnnualInvestment * year - this.user.enteredInitialInvestment;
      this.annualData={
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.user.enteredAnnualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.user.enteredInitialInvestment + this.user.enteredAnnualInvestment * year,
      }
      this.annualService.addData(this.annualData);
      console.log(this.annualService.getData());
    }

}
}
