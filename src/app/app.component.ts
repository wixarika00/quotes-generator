import { Component } from '@angular/core';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quotation[]= QUOTES;

  addVote(quote: Quotation, value: number) {
    quote.votes += value;
  }

  bestQuotes() {
    return this.quotes.filter(q => q.votes >0);
  }

  worstQuotes() {
    return this.quotes.filter(q => q.votes <0);
  }

  onNewQuotation(quote: Quotation) {
    this.quotes.unshift(quote)
  }
}
