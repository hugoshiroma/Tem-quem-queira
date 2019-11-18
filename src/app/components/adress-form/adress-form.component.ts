import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../login/shared/auth.service';
import { MapsService } from './../../maps.service';

@Component({
  selector: 'adress-form',
  templateUrl: './adress-form.component.html',
  styleUrls: ['./adress-form.component.scss']
})
export class AdressFormComponent implements OnInit {
  url = '';
  lat = -23.482362;
  long = -46.500053;

  locationForm: FormGroup;
  step = 0;

  @Input() DoE = '';
  @Output() blurEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private authService: AuthService, private maps: MapsService) {
    this.locationForm = this.fb.group({
      cep: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.authService.autenticado) {
      this.locationForm.controls['cep'].setValue(this.authService.user.cep);
    }
  }

  searchAdress(input) {
    if (input.length !== 8) {
      return;
    } else {
      this.step = 1;
      setTimeout(() => {
        this.step = 2;
        this.maps.getAdress(this.locationForm.controls['cep'].value);
      }, 3000);
    }
  }

  back() {
    this.step--;
  }

  close() {
    this.blurEvent.emit();
  }

}
