import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() quotes: Quotation[];
  @Output() vote = new EventEmitter<QuotationEvent>();

  addVote(quote: Quotation, value: number) {
    this.vote.emit({ quote, value });
  }
}

export interface QuotationEvent {
  quote: Quotation;
  value: number;
}

