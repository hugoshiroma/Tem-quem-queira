import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'adress-form',
  templateUrl: './adress-form.component.html',
  styleUrls: ['./adress-form.component.scss']
})
export class AdressFormComponent implements OnInit {

  locationForm: FormGroup;
  step = 0;

  @Input() DoE = '';
  @Output() blurEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.locationForm = this.fb.group({
      cep: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  searchAdress(input) {
    if (input.length !== 9) {
      return;
    } else {
      this.step = 1;
    }
  }

  back() {
    this.step--;
  }

  close() {
    this.blurEvent.emit();
  }

}
