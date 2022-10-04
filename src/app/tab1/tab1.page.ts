import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  empDetails = [
    { name: 'Ankit Pal', location: 'noida' },
    { name: 'Vishnu Sharma', location: 'lucknow' },
    { name: 'Krishna Verma', location: 'jhanshi' },
    { name: 'Bhawna Sharma', location: 'Jewar' },
    { name: 'Ajit Roy', location: 'Mithila' },
  ];

  constructor() {}
}
