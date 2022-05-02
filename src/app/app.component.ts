import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    {
      text: 'Excel export',
      path: '/excel'
    },
    {
      text: 'Factorial',
      path: '/factorial'
    }
  ];
}