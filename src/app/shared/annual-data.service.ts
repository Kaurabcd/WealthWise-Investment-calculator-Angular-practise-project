import { Injectable, signal } from '@angular/core';
import { annualData } from './annual-data.model';
import { investmentInput } from '../user-inputs/user-inputs.model';

@Injectable({
  providedIn: 'root'
})
export class AnnualDataService {
  InvestmentResultFinal = signal<annualData[]>([]);

  constructor() {}

  calculateInvestmentResults(user: investmentInput) {
    console.log(user);
    let investmentValue = user.enteredInitialInvestment;

    // Clear previous results
    // this.InvestmentResultFinal.set([]);

    for (let i = 0; i < user.enteredDuration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (user.enteredExpectedRetrun / 100);
      investmentValue += interestEarnedInYear + user.enteredAnnualInvestment;
      const totalInterest =
        investmentValue - user.enteredAnnualInvestment * year - user.enteredInitialInvestment;

      const investmentResult: annualData = {
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: user.enteredAnnualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: user.enteredInitialInvestment + user.enteredAnnualInvestment * year,
      };

      // Use update to immutably append the new result to the array
      this.InvestmentResultFinal.update((results: annualData[]) => [...results, investmentResult]);

      console.log(`Investment result for year ${year}:`, investmentResult);
    }

    console.log('Final Investment Results:', this.InvestmentResultFinal());
  }
}
