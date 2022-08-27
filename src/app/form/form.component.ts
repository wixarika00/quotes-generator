import { Component, EventEmitter, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() newQuotation = new EventEmitter<Quotation>();
  showForm = false;
  quote: Quotation = {author: '', quotation: '', votes: 0};

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.newQuotation.emit(this.quote);
    this.quote = {author: '', quotation: '', votes: 0};
  }

}
