import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { UserInputsComponent } from "./user-inputs/user-inputs.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[AppComponent,HeaderComponent, UserInputsComponent, InvestmentResultsComponent],
    bootstrap:[AppComponent],
    imports:[FormsModule,BrowserModule]
})
export class AppModule{}