import { Injectable } from '@angular/core';
import { annualData } from './annual-data.model';

@Injectable({
  providedIn: 'root'
})
export class AnnualDataService {
    annualdata:annualData[]=[];
  constructor() { }
  addData(data:annualData){
    this.annualdata.push(data);
  }
  getData(){
    return this.annualdata;
  }
}
