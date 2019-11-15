import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  DoE = '';
  showForm = false;

  constructor() { }

  ngOnInit() {
  }

  openForm(DoE: string) {
    this.showForm = true;
    this.DoE = DoE;
  }

}
